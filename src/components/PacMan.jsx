import { useGLTF, useTexture } from '@react-three/drei';

export function PacMan (props) {

      const { nodes, materials } = useGLTF('/models/pacman.glb')
      return (
        <group {...props} dispose={null}>
          <group rotation={[-Math.PI / 2, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_2.geometry}    
              material={materials.Material__25}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_3.geometry}
              material={materials.door}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_4.geometry}
              material={materials.maze}
            />
          </group>
        </group>
      )
    }
    
    useGLTF.preload('/models/pacman.glb');
    export default PacMan;
