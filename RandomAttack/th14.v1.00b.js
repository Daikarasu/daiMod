{
    //Pointdevice binhacks by Priw8 (thank you!)
    "binhacks": {
        "Priw8.th14pointdevice_binhack_4252DA": {
            "addr": 0x4252DA,
            "expected": "0F87 [0x429C28]",
            "code": "0F87 [codecave:Priw8.th14pointdevice_customInsHandler]"
        },
        "Priw8.th14pointdevice_binhack_44DD91": {
            "addr": 0x44DD91,
            "expected": "E8 [0x44F5E0]",
            "code": "E9 [codecave:Priw8.th14pointdevice_playerDeadHook]"
        },
        "Priw8.th14pointdevice_binhack_439844": {
            "addr": 0x439844,
            "expected": "8B1D 94584F00 43",
            "code": "BB 01000000 <nop:2>"
        },
        "Priw8.th14pointdevice_binhack_4397BB": {
            "addr": 0x4397BB,
            "expected": "8B5D 08 56 57",
            "code": "E9 [codecave:Priw8.th14pointdevice_replaceLifePiece]"
        },
        
        "Dai.anm.effect.7.on_destroy.properly_clean_up_vms": {
            "addr": 0x408523,
            "expected": "EB 0E 83A0 34050000 FE C740 2C FFFFFFFF 83C6 04 83EF 01 75 D9 5F 5E 33C0 5B C3 <int3:1>",
            "code": "EB 0C 8360 18 FE 8360 1C DF 8348 1C 20 83C6 04 4F 75 DD 5F 5E 31C0 5B C3 <int3:5>"
        },
    },
    "codecaves": {
        "Priw8.th14pointdevice_itemMgrCopyPtr": {
            "access": "rw",
            "size": 4,
        },
        "Priw8.th14pointdevice_bulletMgrCopyPtr": {
            "access": "rw",
            "size": 4,
        },
        "Priw8.th14pointdevice_bgCopyPtr": {
            "access": "rw",
            "size": 4,
        },
        "Priw8.th14pointdevice_playerPosCopy": {
            "access": "rw",
            "size": 8,
        },
        "Priw8.th14pointdevice_enemyPtr":  {
            "access": "rw",
            "size": 4,
        },
        "Priw8.th14pointdevice_enemyCopyPtr":  {
            "access": "rw",
            "size": 4,
        },
        "Priw8.th14pointdevice_gameStateStructCopyPtr":  {
            "access": "rw",
            "size": 4,
        },
        "Priw8.th14pointdevice_memcpy4": {
            "access": "re",
            "code": "c1 e9 02 F3 A5 c3",
        },
        "Priw8.th14pointdevice_cpyGameState": {
            "access": "re",
            "code": "83 c7 08 83 c6 08 8b 06 89 07 83 c7 10 83 c6 10 8b 06 89 07 83 c7 0c 83 c6 0c 8b 06 89 07 83 c7 0c 83 c6 0c 8b 06 89 07 83 c7 0c 83 c6 0c 8b 06 89 07 83 c7 04 83 c6 04 8b 06 89 07 83 c7 08 83 c6 08 8b 06 89 07 83 c7 04 83 c6 04 8b 06 89 07 83 c7 24 83 c6 24 8b 06 89 07 c3",
        },
        "Priw8.th14pointdevice_allocIfNull": {
            "access": "re",
            "code": "8b 4c 24 04 8b 01 85 c0 0f 85 14 00 00 00 ff 74 24 08 b8 af 54 48 00 ff d0 83 c4 04 8b 4c 24 04 89 01 c2 08 00",
        },
        /*
        //old version
        "Priw8.th14pointdevice_customInsHandler": {
            "access": "re",
            "code": "3d a4 06 00 00 0f 84 07 00 00 00 b8 28 9c 42 00 ff e0 60 e8 08 00 00 00 61 b8 28 9c 42 00 ff e0 89 fe bf <codecave:Priw8.th14pointdevice_enemyPtr> 89 37 bf <codecave:Priw8.th14pointdevice_enemyCopyPtr> 68 0c 53 00 00 57 e8 [codecave:Priw8.th14pointdevice_allocIfNull] 89 c7 8b b6 ec 40 00 00 83 c6 04 b9 10 13 00 00 e8 [codecave:Priw8.th14pointdevice_memcpy4] 81 c7 54 01 00 00 81 c6 54 01 00 00 b9 70 00 00 00 e8 [codecave:Priw8.th14pointdevice_memcpy4] 83 c7 10 83 c6 10 b9 24 3e 00 00 e8 [codecave:Priw8.th14pointdevice_memcpy4] bf <codecave:Priw8.th14pointdevice_enemyCopyPtr> 8b 3f 83 47 08 10 bf <codecave:Priw8.th14pointdevice_playerPosCopy> 8b 35 7c b6 4d 00 8d 86 ec 05 00 00 8b 18 89 1f 8b 58 04 89 5f 04 b8 <codecave:Priw8.th14pointdevice_itemMgrCopyPtr> 68 88 d8 dd 00 50 e8 [codecave:Priw8.th14pointdevice_allocIfNull] 8b 35 60 b6 4d 00 89 c7 b9 88 d8 dd 00 e8 [codecave:Priw8.th14pointdevice_memcpy4] b8 <codecave:Priw8.th14pointdevice_bulletMgrCopyPtr> 68 d0 f6 9b 00 50 e8 [codecave:Priw8.th14pointdevice_allocIfNull] 8b 35 30 b5 4d 00 89 c7 b9 d0 f6 9b 00 e8 [codecave:Priw8.th14pointdevice_memcpy4] b8 <codecave:Priw8.th14pointdevice_gameStateStructCopyPtr> 68 b0 02 00 00 50 e8 [codecave:Priw8.th14pointdevice_allocIfNull] 89 c7 be 28 58 4f 00 e8 [codecave:Priw8.th14pointdevice_cpyGameState] b8 <codecave:Priw8.th14pointdevice_bgCopyPtr> 68 a0 43 00 00 50 e8 [codecave:Priw8.th14pointdevice_allocIfNull] 89 c7 8b 35 28 b5 4d 00 b9 a0 43 00 00 e8 [codecave:Priw8.th14pointdevice_memcpy4] c3",
        },
        "Priw8.th14pointdevice_playerDeadHook": {
            "access": "re",
            "code": "60 e8 08 00 00 00 61 b8 d1 df 44 00 ff e0 89 fe a1 44 b5 4d 00 8b 80 d0 00 00 00 85 c0 0f 84 24 00 00 00 8b 18 f7 83 44 52 00 00 00 20 00 00 0f 85 0a 00 00 00 81 8b 44 52 00 00 00 00 00 02 8b 40 04 e9 d4 ff ff ff 6a 00 6a 01 b8 00 ac 43 00 ff d0 b8 50 d4 41 00 ff d0 c7 86 84 06 00 00 01 00 00 00 bf <codecave:Priw8.th14pointdevice_playerPosCopy> 8d 86 ec 05 00 00 8b 1f 89 18 8b 5f 04 89 58 04 8d 8e c0 82 01 00 6a 3c b8 00 8b 40 00 ff d0 b8 <codecave:Priw8.th14pointdevice_enemyPtr> 8b 00 8b 80 ec 40 00 00 83 c0 08 8b 88 14 10 00 00 b8 b0 45 48 00 ff d0 be <codecave:Priw8.th14pointdevice_enemyCopyPtr> 8b 36 b8 <codecave:Priw8.th14pointdevice_enemyPtr> 8b 00 8b b8 ec 40 00 00 83 c7 04 b9 10 13 00 00 e8 [codecave:Priw8.th14pointdevice_memcpy4] 81 c7 54 01 00 00 81 c6 54 01 00 00 b9 70 00 00 00 e8 [codecave:Priw8.th14pointdevice_memcpy4] 83 c6 10 83 c7 10 b9 24 3e 00 00 e8 [codecave:Priw8.th14pointdevice_memcpy4] be <codecave:Priw8.th14pointdevice_itemMgrCopyPtr> 8b 36 8b 3d 60 b6 4d 00 b9 88 d8 dd 00 e8 [codecave:Priw8.th14pointdevice_memcpy4] be <codecave:Priw8.th14pointdevice_bulletMgrCopyPtr> 8b 36 8b 3d 30 b5 4d 00 b9 d0 f6 9b 00 e8 [codecave:Priw8.th14pointdevice_memcpy4] bf 28 58 4f 00 be <codecave:Priw8.th14pointdevice_gameStateStructCopyPtr> 8b 36 e8 [codecave:Priw8.th14pointdevice_cpyGameState] be <codecave:Priw8.th14pointdevice_bgCopyPtr> 8b 36 8b 3d 28 b5 4d 00 b9 a0 43 00 00 e8 [codecave:Priw8.th14pointdevice_memcpy4] 8b 0d 7c b6 4d 00 b8 70 f9 44 00 ff d0 8b 0d 50 b5 4d 00 a1 74 58 4f 00 50 a1 70 58 4f 00 50 b8 d0 4f 43 00 ff d0 b8 b0 fc 47 00 ff d0 89 c6 8b 0d 3c b5 4d 00 8b 49 10 68 c4 00 00 00 56 b8 70 fd 47 00 ff d0 31 c0 89 46 3c 89 46 40 89 46 44 89 86 9c 05 00 00 89 86 a0 05 00 00 89 86 a4 05 00 00 56 54 b8 90 e8 47 00 ff d0 c3",
        },
        */
        "Priw8.th14pointdevice_customInsHandler": {
            "access": "re",
            "code": "3d a4 06 00 00 0f 84 07 00 00 00 b8 28 9c 42 00 ff e0 60 e8 08 00 00 00 61 b8 28 9c 42 00 ff e0 8B8F EC400000 E8 [codecave:Dai.th14pointdevice_eclFreeAsyncContextList] 89 fe bf <codecave:Priw8.th14pointdevice_enemyPtr> 89 37 bf <codecave:Priw8.th14pointdevice_enemyCopyPtr> 68 0c 53 00 00 57 e8 [codecave:Priw8.th14pointdevice_allocIfNull] 89 c7 8b b6 ec 40 00 00 83 c6 04 b9 10 13 00 00 e8 [codecave:Priw8.th14pointdevice_memcpy4] 81 c7 54 01 00 00 81 c6 54 01 00 00 b9 70 00 00 00 e8 [codecave:Priw8.th14pointdevice_memcpy4] 83 c7 10 83 c6 10 b9 24 3e 00 00 e8 [codecave:Priw8.th14pointdevice_memcpy4] bf <codecave:Priw8.th14pointdevice_enemyCopyPtr> 8b 3f 83 47 08 10 bf <codecave:Priw8.th14pointdevice_playerPosCopy> 8b 35 7c b6 4d 00 8d 86 ec 05 00 00 8b 18 89 1f 8b 58 04 89 5f 04 b8 <codecave:Priw8.th14pointdevice_itemMgrCopyPtr> 68 88 d8 dd 00 50 e8 [codecave:Priw8.th14pointdevice_allocIfNull] 8b 35 60 b6 4d 00 89 c7 b9 88 d8 dd 00 e8 [codecave:Priw8.th14pointdevice_memcpy4] b8 <codecave:Priw8.th14pointdevice_bulletMgrCopyPtr> 68 d0 f6 9b 00 50 e8 [codecave:Priw8.th14pointdevice_allocIfNull] 8b 35 30 b5 4d 00 89 c7 b9 d0 f6 9b 00 e8 [codecave:Priw8.th14pointdevice_memcpy4] b8 <codecave:Priw8.th14pointdevice_gameStateStructCopyPtr> 68 b0 02 00 00 50 e8 [codecave:Priw8.th14pointdevice_allocIfNull] 89 c7 be 28 58 4f 00 e8 [codecave:Priw8.th14pointdevice_cpyGameState] b8 <codecave:Priw8.th14pointdevice_bgCopyPtr> 68 a0 43 00 00 50 e8 [codecave:Priw8.th14pointdevice_allocIfNull] 89 c7 8b 35 28 b5 4d 00 b9 a0 43 00 00 e8 [codecave:Priw8.th14pointdevice_memcpy4] c3",
        },
        "Priw8.th14pointdevice_playerDeadHook": {
            "access": "re",
            "code": "60 e8 08 00 00 00 61 b8 d1 df 44 00 ff e0 89 fe a1 44 b5 4d 00 8b 80 d0 00 00 00 85 c0 0f 84 24 00 00 00 8b 18 f7 83 44 52 00 00 00 20 00 00 0f 85 0a 00 00 00 81 8b 44 52 00 00 00 00 00 02 8b 40 04 e9 d4 ff ff ff 6a 00 6a 01 b8 00 ac 43 00 ff d0 b8 50 d4 41 00 ff d0 c7 86 84 06 00 00 01 00 00 00 bf <codecave:Priw8.th14pointdevice_playerPosCopy> 8d 86 ec 05 00 00 8b 1f 89 18 8b 5f 04 89 58 04 8d 8e c0 82 01 00 6a 3c b8 00 8b 40 00 ff d0   A1 <codecave:Priw8.th14pointdevice_enemyPtr> 8B88 EC400000 E8 [codecave:Dai.th14pointdevice_eclFreeAsyncContextList] be <codecave:Priw8.th14pointdevice_enemyCopyPtr> 8b 36 b8 <codecave:Priw8.th14pointdevice_enemyPtr> 8b 00 8b b8 ec 40 00 00 83 c7 04 b9 10 13 00 00 e8 [codecave:Priw8.th14pointdevice_memcpy4] 81 c7 54 01 00 00 81 c6 54 01 00 00 b9 70 00 00 00 e8 [codecave:Priw8.th14pointdevice_memcpy4] 83 c6 10 83 c7 10 b9 24 3e 00 00 e8 [codecave:Priw8.th14pointdevice_memcpy4] be <codecave:Priw8.th14pointdevice_itemMgrCopyPtr> 8b 36 8b 3d 60 b6 4d 00 b9 88 d8 dd 00 e8 [codecave:Priw8.th14pointdevice_memcpy4] be <codecave:Priw8.th14pointdevice_bulletMgrCopyPtr> 8b 36 8b 3d 30 b5 4d 00 b9 d0 f6 9b 00 e8 [codecave:Priw8.th14pointdevice_memcpy4] bf 28 58 4f 00 be <codecave:Priw8.th14pointdevice_gameStateStructCopyPtr> 8b 36 e8 [codecave:Priw8.th14pointdevice_cpyGameState] be <codecave:Priw8.th14pointdevice_bgCopyPtr> 8b 36 8b 3d 28 b5 4d 00 b9 a0 43 00 00 e8 [codecave:Priw8.th14pointdevice_memcpy4] 8b 0d 7c b6 4d 00 b8 70 f9 44 00 ff d0 8b 0d 50 b5 4d 00 a1 74 58 4f 00 50 a1 70 58 4f 00 50 b8 d0 4f 43 00 ff d0 83EC 04 8D04E4 51 6A FF 8B0D 3CB54D00 8B49 10 68 C4000000 50 E8 [0x42DF70] 83C4 04 C3",
        },
        
        "Priw8.th14pointdevice_replaceLifePiece": {
            "access": "re",
            "code": "8b 5d 08 56 57 83 fb 04 0f 85 ac 00 00 00 bb <codecave:Priw8.th14pointdevice_FLOAT_32> 83 ec 08 89 e7 8b 75 0c f3 0f 10 06 f3 0f 58 03 f3 0f 11 07 f3 0f 10 46 04 f3 0f 11 47 04 6a 00 83 ec 0c c7 44 24 08 cd cc 0c 40 c7 44 24 04 db 0f c9 bf 57 6a 06 b8 b0 97 43 00 ff d0 f3 0f 10 06 f3 0f 5c 03 f3 0f 11 07 6a 00 83 ec 0c c7 44 24 08 cd cc 0c 40 c7 44 24 04 db 0f c9 bf 57 6a 06 b8 b0 97 43 00 ff d0 f3 0f 10 06 f3 0f 11 07 f3 0f 10 46 04 f3 0f 5c 03 f3 0f 11 47 04 6a 00 83 ec 0c c7 44 24 08 cd cc 0c 40 c7 44 24 04 db 0f c9 bf 57 6a 06 b8 b0 97 43 00 ff d0 83 c4 08 b8 5a 99 43 00 ff e0 b8 c0 97 43 00 ff e0",
        },
        "Priw8.th14pointdevice_FLOAT_32": {
            "access": "r",
            "code": "+32.0f",
        },
        
        "Dai.th14pointdevice_eclFreeAsyncContextList": {
            "access": "re",
            "code": "53 57 56 89CB 8BB3 D4110000 85F6 74 1D <nop:1> 8B7E 04 FF36 E8 [0x4854FE] 83C4 04 56 E8 [0x4854FE] 83C4 04 89FE 85FF 75 E4 31C0 8983 D4110000 8983 D8110000 8983 DC110000 5E 5F 5B C3"
        },
        
        "protection": "0x40"
    }
}