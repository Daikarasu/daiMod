{
    "codecaves": {
        //rewritten RNG with Xorshift32
        "Dai.RNG32.rand_dword": {
            "access": "re",
            "code": "\
                56 \
                8BF1 \
                8B06 \
                8BD0 \
                FF46 04 \
                C1E2 0D \
                33C2 \
                8BD0 \
                C1EA 11 \
                33C2 \
                8BC8 \
                C1E1 05 \
                33C1 \
                8906 \
                5E \
                C3 \
            ",
            /*
                PUSH ESI
                MOV ESI,ECX
                MOV EAX,DWORD PTR [ESI]
                MOV EDX,EAX
                INC DWORD PTR [ESI+4]
                SHL EDX,0D,
                XOR EAX,EDX
                MOV EDX,EAX
                SHR EDX,11
                XOR EAX,EDX
                MOV ECX,EAX
                SHL ECX,5
                XOR EAX,ECX
                MOV DWORD PTR [ESI],EAX
                POP ESI
                RET
            */
        },
        "Dai.RNG32.rand_word": {
            "access": "re",
            "code": "\
                E8 [codecave:Dai.RNG32.rand_dword] \
                0FB7C0 \
                C3 \
            ",
            /*
                CALL codecave:Dai.RNG32.rand_dword
                MOVZX EAX,AX
                RET
            */
        },
    }
}