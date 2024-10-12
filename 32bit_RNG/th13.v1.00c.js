{
    "options": {
        //these are solely to make porting to other games easier
        "Dai.RNG32.addr.rng_rand_dword": {
            "type": "u32",
            "val": "<0x472C90>"
        },
        "Dai.RNG32.addr.rng_rand_dword_copy": {
            "type": "u32",
            "val": "<0x472D20>"
        },
        "Dai.RNG32.addr.rng_rand_word": {
            "type": "u32",
            "val": "<0x472C20>"
        },
        "Dai.RNG32.addr.replay_unsafe_rng": {
            "type": "u32",
            "val": "<0x4DC324>"
        },
        "Dai.RNG32.addr.replay_safe_rng": {
            "type": "u32",
            "val": "<0x4DC31C>"
        },
        "Dai.RNG32.addr.stage_num_global": {
            "type": "u32",
            "val": "<0x4BE81C>"
        },
    },
    "binhacks": {
        "Dai.RNG32.rand_dword.jmp_to_new": {
            "addr": "<option:Dai.RNG32.addr.rng_rand_dword>",
            "code": "89F1 E9 [codecave:Dai.RNG32.rand_dword]",
        },
        "Dai.RNG32.rand_dword_copy.jmp_to_new": {
            "addr": "<option:Dai.RNG32.addr.rng_rand_dword_copy>",
            "code": "89F1 E9 [codecave:Dai.RNG32.rand_dword]",
        },
        "Dai.RNG32.rand_word.jmp_to_new": {
            "addr": "<option:Dai.RNG32.addr.rng_rand_word>",
            "code": "89F1 E9 [codecave:Dai.RNG32.rand_word]",
        },
        "Dai.RNG32.init_state": {
            "addr": 0x43A06B,
            "expected": "\
                66A3 <option:Dai.RNG32.addr.replay_unsafe_rng> \
                66A3 <option:Dai.RNG32.addr.replay_safe_rng> \
            ",
            /*
                MOV WORD PTR [REPLAY_UNSAFE_RNG],AX
                MOV WORD PTR [REPLAY_SAFE_RNG],AX
            */
            "code": "\
                A3 <option:Dai.RNG32.addr.replay_unsafe_rng> \
                A3 <option:Dai.RNG32.addr.replay_safe_rng> \
                <nop:2>\
            ",
            /*
                MOV DWORD PTR [REPLAY_UNSAFE_RNG],EAX
                MOV DWORD PTR [REPLAY_SAFE_RNG],EAX
                <nop:2>
            */
        },
        "Dai.RNG32.init_state.replay_recording.0": {
            "addr": 0x4490B9,
            "expected": "\
                0FB715 <option:Dai.RNG32.addr.replay_unsafe_rng> \
                668950 02 \
                668BCA \
                0FB715 <option:Dai.RNG32.addr.stage_num_global> \
                66890D <option:Dai.RNG32.addr.replay_safe_rng> \
                C705 (<option:Dai.RNG32.addr.replay_unsafe_rng>+4) 00000000 \
            ",
            /*
                MOVZX EDX,WORD PTR [REPLAY_UNSAFE_RNG]
                MOV WORD PTR [ECX+2],DX
                MOV CX,DX                         //
                MOVZX EDX,WORD PTR [CURRENT_STAGE_NUM]
                MOV WORD PTR [REPLAY_SAFE_RNG],CX //these lines are removed
                MOV DWORD PTR [REPLAY_UNSAFE_RNG+4],0
            */
            "code": "\
                0FB715 <option:Dai.RNG32.addr.replay_unsafe_rng> \
                668950 02 \
                8915 <option:Dai.RNG32.addr.replay_unsafe_rng> \
                <nop:4> \
                0FB715 <option:Dai.RNG32.addr.stage_num_global> \
                C705 (<option:Dai.RNG32.addr.replay_unsafe_rng>+4) 00000000 \
            ",
            /*
                MOVZX EDX,WORD PTR [REPLAY_UNSAFE_RNG]
                MOV WORD PTR [ECX+2],DX
                MOV DWORD PTR [REPLAY_UNSAFE_RNG],EDX
                <nop:4>
                MOVZX EDX,WORD PTR [CURRENT_STAGE_NUM]
                MOV DWORD PTR [REPLAY_UNSAFE_RNG+4],0
            */
        },
        "Dai.RNG32.init_state.replay_playback.0": {
            "addr": 0x449121,
            "expected": "\
                668B41 02 \
                66A3 <option:Dai.RNG32.addr.replay_unsafe_rng> \
                668B51 02 \
                8D71 14 \
                B9 16000000 \
                BF B8E74B00 \
                668915 <option:Dai.RNG32.addr.replay_safe_rng> \
            ",
            /*
                MOV AX,WORD PTR [ECX+2]
                MOV WORD PTR [REPLAY_UNSAFE_RNG],AX
                MOV DX,WORD PTR [ECX+2]
                LEA ESI,[ECX+14]
                MOV ECX,16
                MOV EDI,GLOBALS
                MOV WORD PTR [REPLAY_SAFE_RNG],DX
            */
            "code": "\
                0FB741 02 \
                A3 <option:Dai.RNG32.addr.replay_unsafe_rng> \
                8D71 14 \
                B9 16000000 \
                BF B8E74B00 \
                <nop:12> \
            ",
            /*
                MOVZX EAX,WORD PTR [ECX+2]
                MOV DWORD PTR [REPLAY_UNSAFE_RNG],EAX
                LEA ESI,[ECX+14]
                MOV ECX,16
                MOV EDI,GLOBALS
            */
        },
        "Dai.RNG32.init_state.replay_recording.1": {
            "addr": 0x447A67,
            "expected": "\
                0FB70D <option:Dai.RNG32.addr.replay_unsafe_rng> \
                668948 02 \
            ",
            /*
                MOVZX ECX,WORD PTR [REPLAY_UNSAFE_RNG]
                MOV WORD PTR [EAX+2],CX
            */
            "code": "\
                E9 [codecave:Dai.RNG32.init_state.replay_recording.1.cave] \
                <int3:6> \
            ",
            /*
                 JMP codecave:Dai.RNG32.init_state.replay_recording.1.cave
                 <int3:6>
            */
        },
        "Dai.RNG32.init_state.replay_playback.1": {
            "addr": 0x447C89,
            "expected": "\
                668B41 02 \
                8D71 14 \
                66A3 <option:Dai.RNG32.addr.replay_unsafe_rng> \
            ",
            /*
                MOV AX,WORD PTR [ECX+2]
                LEA ESI,[ECX+14]
                MOV WORD PTR [REPLAY_UNSAFE_RNG],AX
            */
            "code": "\
                0FB741 02 \
                8D71 14 \
                A3 <option:Dai.RNG32.addr.replay_unsafe_rng> \
                <nop:1> \
            ",
            /*
                MOVZX EAX,WORD PTR [ECX+2]
                LEA ESI,[ECX+14]
                MOV DWORD PTR [REPLAY_UNSAFE_RNG],EAX
                <nop:1>
            */
        },
        
        
        
        "Dai.RNG32.rand_word.replace_inlined.0": {
            "addr": 0x401A96,
            "expected": "803D ED494E00 00 74 11 68 98494E00",
            "code": "B9 <option:Dai.RNG32.addr.replay_safe_rng> E8 [codecave:Dai.RNG32.rand_dword] EB 5F <int3:2>"
        },
        
        "Dai.RNG32.rand_word.replace_inlined.1": {
            "addr": 0x401B15,
            "expected": "803D ED494E00 00 74 11 68 98494E00",
            "code": "B9 <option:Dai.RNG32.addr.replay_safe_rng> E8 [codecave:Dai.RNG32.rand_dword] EB 59 <int3:2>"
        },
        
        "Dai.RNG32.rand_word.replace_inlined.2": {
            "addr": 0x401B8E,
            "expected": "803D ED494E00 00 74 11 68 98494E00",
            "code": "B9 <option:Dai.RNG32.addr.replay_safe_rng> E8 [codecave:Dai.RNG32.rand_dword] EB 59 <int3:2>"
        },
        
        "Dai.RNG32.rand_word.replace_inlined.3": {
            "addr": 0x449A80,
            "expected": "803D ED494E00 00 74 0D 68 98494E00",
            "code": "B9 <option:Dai.RNG32.addr.replay_unsafe_rng> E8 [codecave:Dai.RNG32.rand_dword] EB 59 <int3:2>"
        },
        "Dai.RNG32.rand_word.replace_inlined.4a": {
            "addr": 0x45ACB3,
            "expected": "803D ED494E00 00 74 0D 68 98494E00",
            "code": "B9 <option:Dai.RNG32.addr.replay_safe_rng> E8 [codecave:Dai.RNG32.rand_word] EB 52 <int3:2>"
        },
    },
    "codecaves": {
        "Dai.RNG32.init_state.replay_recording.1.cave": {
            "access": "re",
            "code": "\
                0FB70D <option:Dai.RNG32.addr.replay_unsafe_rng> \
                668948 02 \
                890D <option:Dai.RNG32.addr.replay_unsafe_rng> \
                E9 [0x447A72] \
            ",
            /*
                MOVZX ECX,WORD PTR [REPLAY_UNSAFE_RNG]
                MOV WORD PTR [EAX+2],CX
                MOV DWORD PTR [REPLAY_UNSAFE_RNG],ECX
                JMP back
            */
        },
    },
}