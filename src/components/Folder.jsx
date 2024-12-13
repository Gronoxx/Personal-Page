

  
  import React, { useRef , useEffect, useState} from 'react';
  import { useGLTF } from '@react-three/drei';
  import gsap from 'gsap';
  import {useGSAP} from '@gsap/react';
  import {useFrame} from "@react-three/fiber";

export function Folder(props) {
  const { nodes, materials, animations } = useGLTF('/models/icon_folder.glb')

  const folderRef = useRef();
  const [hasAnimated, setHasAnimated] = useState(false);

  const initialTime = useRef(null); // Store initial time in useRef to persist across renders

  useFrame(() => {
    if (hasAnimated) return; // Prevent animation after it completes

    if (initialTime.current === null) {
      initialTime.current = Date.now();  // Set the start time once, when the animation starts
    }

    const elapsed = Date.now() - initialTime.current; // Calculate elapsed time since animation started

    // Animation logic: scale from 1 to 4 over 2 seconds
    if (elapsed <= 2000) { // 2 seconds in milliseconds
      const scale = (elapsed / 2000) * 0.42 + 0.13; // Interpolate scale from 1 to 4
      folderRef.current.scale.set(scale, scale, scale);
    } else {
      setHasAnimated(true); // Stop the animation after reaching max size
    }
  });

  useEffect(() => {
    // Trigger animation immediately when the component is mounted
    initialTime.current = null;  // Reset initial time when component mounts
  }, []);

  useFrame(()=>{
    folderRef.current.rotation.y -=0.0035;
  })

  return (
    <group ref={folderRef} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="f0d7a2397f3a47b098f321d0fe068c9afbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_2">
              <group name="RootNode">
                <group
                  name="Camera_Track"
                  position={[500, 500, 500]}
                  rotation={[-Math.PI, Math.PI / 4, 2.526]}
                  scale={100}>
                  <group name="Object_5" />
                </group>
                <group name="CT_Target" rotation={[-Math.PI / 2, 0, 0]} scale={100} />
                <group name="CT_DOF" scale={0.104} />
                <group name="CO_Pivot" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                  <group
                    name="Camera_Orbit"
                    position={[5, -5, 5]}
                    rotation={[-Math.PI / 2, Math.PI / 4, 2.526]}>
                    <group name="Object_10" />
                  </group>
                </group>
                <group
                  name="Camera_Free"
                  position={[-370.57, 239.075, 355.872]}
                  rotation={[0, 0.778, -0.302]}
                  scale={100}>
                  <group name="Object_12" />
                </group>
                <group name="Plane" rotation={[-1.669, 0, 0]} scale={100} />
                <group
                  name="Plane001"
                  position={[-2.599, 73.991, -7.256]}
                  rotation={[-1.669, -0.037, 0]}
                  scale={100}
                />
                <group
                  name="Plane002"
                  position={[1.707, 71.249, -2.006]}
                  rotation={[-1.584, 0.026, -0.002]}
                  scale={100}
                />
                <group
                  name="Plane003"
                  position={[-0.702, 69.044, 2.484]}
                  rotation={[-1.534, -0.011, 0.003]}
                  scale={100}
                />
                <group
                  name="TriLamp-Back"
                  position={[-63.278, 500, -449.404]}
                  rotation={[2.4, -0.103, 3.047]}
                  scale={100}>
                  <group name="Object_18" rotation={[Math.PI / 2, 0, 0]}>
                    <group name="Object_19" />
                  </group>
                </group>
                <group
                  name="TriLamp-Fill"
                  position={[-15.721, 500, 453.565]}
                  rotation={[0.737, -0.026, 0.023]}
                  scale={100}>
                  <group name="Object_21" rotation={[Math.PI / 2, 0, 0]}>
                    <group name="Object_22" />
                  </group>
                </group>
                <group
                  name="TriLamp-Key"
                  position={[-433.972, 500, 132.801]}
                  rotation={[1.259, -0.787, 1.144]}
                  scale={100}>
                  <group name="Object_24" rotation={[Math.PI / 2, 0, 0]}>
                    <group name="Object_25" />
                  </group>
                </group>
                <group name="Armature" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                  <group name="Object_27">
                    <primitive object={nodes._rootJoint} />
                    <skinnedMesh
                      name="Object_30"
                      geometry={nodes.Object_30.geometry}
                      material={materials.Material}
                      skeleton={nodes.Object_30.skeleton}
                    />
                    <skinnedMesh
                      name="Object_32"
                      geometry={nodes.Object_32.geometry}
                      material={materials.material_0}
                      skeleton={nodes.Object_32.skeleton}
                    />
                    <skinnedMesh
                      name="Object_34"
                      geometry={nodes.Object_34.geometry}
                      material={materials.material_0}
                      skeleton={nodes.Object_34.skeleton}
                    />
                    <skinnedMesh
                      name="Object_36"
                      geometry={nodes.Object_36.geometry}
                      material={materials.material_0}
                      skeleton={nodes.Object_36.skeleton}
                    />
                    <group name="Object_29" rotation={[-1.669, 0, 0]} scale={100} />
                    <group
                      name="Object_31"
                      position={[-2.599, 73.991, -7.256]}
                      rotation={[-1.669, -0.037, 0]}
                      scale={100}
                    />
                    <group
                      name="Object_33"
                      position={[1.707, 71.249, -2.006]}
                      rotation={[-1.584, 0.026, -0.002]}
                      scale={100}
                    />
                    <group
                      name="Object_35"
                      position={[-0.702, 69.044, 2.484]}
                      rotation={[-1.534, -0.011, 0.003]}
                      scale={100}
                    />
                  </group>
                </group>
                <group
                  name="Area"
                  position={[341.772, 328.786, 339.626]}
                  rotation={[0, -Math.PI / 4, -Math.PI / 4]}
                  scale={430}>
                  <group name="Object_49" rotation={[Math.PI / 2, 0, 0]}>
                    <group name="Object_50" />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/icon_folder.glb');
export default Folder;