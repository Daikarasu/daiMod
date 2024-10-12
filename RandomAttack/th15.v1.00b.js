{
    "options": {
        "bullet-cap.bullet-cap": {
            "type": "i32",
            "val": 10000
        },
        "bullet-cap.laser-cap": {
            "type": "i32",
            "val": 2048
        },
        "bullet-cap.cancel-cap": {
            "type": "i32",
            "val": 16384
        },
        "bullet-cap.anm-search-lag-spike-size": {
            "type": "i32",
            "val": 8192
        },
    },
    "binhacks": {
        "Dai.RandomAttack.unlock_all": {
            "addr": 0x46058F,
            "expected": "A1 E09B4E00 8B40 08 8348 04 02 33C0 C705 60BC5100 01000000 C3 <int3:5>",
            "code": "E9 [codecave:Dai.RandomAttack.unlock_all.cave] A1 E09B4E00 8B40 08 8348 04 02 33C0 C705 60BC5100 01000000 C3"
        },
    },
    "codecaves": {
        "Dai.RandomAttack.unlock_all.cave": {
            "access": "re",
            /*
                MOV EAX,DWORD PTR [SCOREFILE_PTR]
                CMP DWORD PTR [EAX+3373E],0x11111111
                JNE LN0
                CMP DWORD PTR [EAX+33742],0x11111111
                JNE LN0
                CMP DWORD PTR [EAX+33746],0x11111111
                JNE LN0
                CMP DWORD PTR [EAX+3374A],0x11111111
                JE 0x459604
            LN0:
                CALL score_unlock_all
                JMP 0x459604
            */
            "code": "\
                A1 <0x4E9BC8> \
                81B8 3E370300 11111111 \
                75 28 \
                81B8 42370300 11111111 \
                75 1C \
                81B8 46370300 11111111 \
                75 10 \
                81B8 4A370300 11111111 \
                0F84 [0x460594] \
                E8 [0x460280] \
                E9 [0x460594] \
            "
        },
    },
}