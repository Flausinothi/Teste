import { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { ScrollControls, useScroll, Text } from "@react-three/drei";
import * as THREE from "three";

const dadosEtapas = [
  { ano: 2010, porcentagem: 0,    legenda: "Ensino Fundamental" },
  { ano: 2013, porcentagem: 15,   legenda: "Ensino Médio" },
  { ano: 2018, porcentagem: 25,   legenda: "Faculdade" },
  { ano: 2022, porcentagem: 50,   legenda: "Primeira Pós-Graduação" },
  { ano: 2026, porcentagem: 100,  legenda: "Segunda Pós-Graduação" },
];

function GraficoLinha3D() {
  const scroll = useScroll();
  const grupoRef = useRef<THREE.Group>(null);
  const { viewport } = useThree();
  const espacamentoX = viewport.width * 0.8;

  const pontos = useMemo(() => {
    return dadosEtapas.map((etapa, index) => {
      const x = index * espacamentoX;
      const y = (etapa.porcentagem / 100) * 2.5;
      return new THREE.Vector3(x, y, 0);
    });
  }, [espacamentoX]);

  const curva = useMemo(() => new THREE.CatmullRomCurve3(pontos), [pontos]);

  useFrame(() => {
    if (!grupoRef.current) return;
    const progressoScroll = scroll.offset;
    const totalItens = dadosEtapas.length - 1;
    const indiceAlvo = Math.round(progressoScroll * totalItens);
    const posicaoAlvoX = -indiceAlvo * espacamentoX;

    grupoRef.current.position.x = THREE.MathUtils.lerp(
        grupoRef.current.position.x,
        posicaoAlvoX,
        0.1,
    );
  });

  return (
    <group ref={grupoRef} position={[0, -0.5, 0]}>
      <mesh>
        <tubeGeometry args={[curva, 64, 0.05, 8, false]} />
        <meshBasicMaterial color="#fde68a" />
      </mesh>

      {dadosEtapas.map((etapa, index) => {
        const p = pontos[index];
        return (
          <group key={index} position={[p.x, p.y, p.z]}>
            <mesh>
              <sphereGeometry args={[0.12, 16, 16]} />
              <meshBasicMaterial color="#f43f5e" />
            </mesh>
            <Text position={[0, -0.4, 0]} fontSize={0.25} color="#ffffff" anchorY="top" fontWeight="bold">
              {etapa.ano}
            </Text>

            <Text position={[0, -0.75, 0]} fontSize={0.16} color="#94a3b8" anchorY="top" maxWidth={1.8} textAlign="center">
              {etapa.legenda}
            </Text>

            <Text position={[0, 0.35, 0]} fontSize={0.22} color="#10b981" fontWeight="bold" anchorY="bottom">
              {etapa.porcentagem}%
            </Text>
          </group>
        );
      })}
    </group>
  );
}

export default function Cronogram() {
  return (
    <div className="min-h-screen bg-[#0d1117] pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <div className="mb-10">
          <h1 className="font-serif text-3xl text-zinc-100">Cronograma</h1>
          <p className="text-zinc-500 text-sm mt-1">
            Trajetória acadêmica e profissional
          </p>
        </div>

        <div className="w-full rounded-2xl overflow-hidden border border-white/8 bg-[#080c12]" style={{ height: 400 }}>
          <Canvas camera={{ position: [0, 0.8, 6], fov: 50 }}>
            <ScrollControls pages={dadosEtapas.length} distance={1} horizontal damping={0.3}>
              <GraficoLinha3D />
            </ScrollControls>
          </Canvas>
        </div> 
        <p className="mt-4 text-center text-zinc-600 text-xs">
          Role o mouse ou arraste dentro do gráfico para navegar pela linha do tempo.
        </p>
      </div>
    </div>
  );
}
