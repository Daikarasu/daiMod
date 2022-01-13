{
    "binhacks": {
        "Dai.ecl.etNew.jump-to-cave": {
            "addr": 0x433E9D,
            "expected": "E9 75250000",
            "code": "E9 [codecave:Dai.ecl.etNew.set-enemy-id]"
        },
		
		"Dai.bullet.on-tick.jump-to-cave-after-try-kill": {
			"addr": 0x424950,
            "expected": "8BF8 83FF 01 75 0F",
            "code": "E9 [codecave:Dai.bullet.set-global-killer-enemy-id-if-hit] <nop:2>"
		},
		"Dai.laser-line.check-graze-or-kill.jump-to-cave-after-try-kill": {
			"addr": 0x44AA5E,
			"expected": "83F8 01 75 49",
			"code": "E9 [codecave:Dai.laser-line.set-global-killer-enemy-id-if-hit]",
		},
		"Dai.laser-infinite.check-graze-or-kill.jump-to-cave-after-try-kill": {
			"addr": 0x44CF18,
			"expected": "83F8 01 75 49",
			"code": "E9 [codecave:Dai.laser-infinite.set-global-killer-enemy-id-if-hit]",
		},
		"Dai.laser-curve.check-graze-or-kill.jump-to-cave-after-try-kill": {
			"addr": 0x44F9E9,
			"expected": "83F8 01 0F85 B1000000",
			"code": "E9 [codecave:Dai.laser-curve.set-global-killer-enemy-id-if-hit] <nop:4>",
		},
		"Dai.enemy.on-tick.jump-to-cave-after-try-kill": {
			"addr": 0x42F66C,
            "expected": "F783 30510000 00020000 74 27 83F8 02 75 22",
            "code": "E9 [codecave:Dai.enemy.set-global-killer-enemy-id-if-hit] <nop:12>",
		},
		
		"Dai.player.on-tick.jump-to-cave-after-death": {
			"addr": 0x45C3AD,
			"expected": "C787 34060000 FFFFFFFF EB 18",
			"code": "E9 [codecave:Dai.player.initiate-zoom-on-death] <nop:7>",
		},
		
		//change the effect.anm script spawned upon death to one that's less visually cluttering for the zoom-in
		"Dai.player.change-death-effect-anm-script": {
			"addr": 0x45D10F,
			"expected": "1C",
			"code": "1D",
		},
		
		//replace several on-tick methods with codecaves that check the freeze value first, and then jump to the original on-tick method
		"Dai.player.replace-on-tick": {
			"addr": 0x45A89E,
			"expected": "68 A0CA4500",
			"code": "68 <codecave:Dai.player.on-tick-freeze>",
		},
		"Dai.enemy-manager.replace-on-tick": {
			"addr": 0x42DCC2,
			"expected": "68 50DF4200",
			"code": "68 <codecave:Dai.enemy-manager.on-tick-freeze>",
		},
		"Dai.bullet-manager.replace-on-tick": {
			"addr": 0x423BC5,
			"expected": "68 704E4200",
			"code": "68 <codecave:Dai.bullet-manager.on-tick-freeze>",
		},
		"Dai.laser-manager.replace-on-tick": {
			"addr": 0x442CB3,
			"expected": "68 70884400",
			"code": "68 <codecave:Dai.laser-manager.on-tick-freeze>",
		},
		"Dai.item-manager.replace-on-tick": {
			"addr": 0x4458A0,
			"expected": "68 C06E4400",
			"code": "68 <codecave:Dai.item-manager.on-tick-freeze>",
		},
		"Dai.effect-manager.replace-on-tick": {
			"addr": 0x42AD1D,
			"expected": "68 30AF4200",
			"code": "68 <codecave:Dai.effect-manager.on-tick-freeze>",
		},
		"Dai.stage.replace-on-tick": {
			"addr": 0x41BA8A,
			"expected": "68 60CA4100",
			"code": "68 <codecave:Dai.stage.on-tick-freeze>",
		},
		"Dai.replay-manager.replace-on-tick-record": {
			"addr": 0x46181E,
			"expected": "C747 08 40294600",
			"code": "C747 08 <codecave:Dai.replay-manager.on-tick-record-freeze>",
		},
		"Dai.replay-manager.replace-on-tick-playback": {
			"addr": 0x461A2A,
			"expected": "68 502A4600",
			"code": "68 <codecave:Dai.replay-manager.on-tick-playback-freeze>",
		},
		"Dai.anm-manager.replace-on-tick-world": {
			"addr": 0x483C30,
			"expected": "C740 08 20824800",
			"code": "C740 08 <codecave:Dai.anm-manager.on-tick-world-freeze>",
		},
		
		//reset the freeze values when the game thread or the main menu thread initializes
		"Dai.gamethread-start.reset-freeze-values.jump-to-cave": {
			"addr": 0x4432B6,
			"expected": "E9 25F2FFFF",
			"code": "E9 [codecave:Dai.gamethread-start.reset-freeze-values]",
		},
		"Dai.mainmenu.thread-start.replace": {
			"addr": [
				0x464CEC,
				0x464CF5,
			],
			"expected": "804B4600",
			"code": "<codecave:Dai.mainmenu.thread-start.reset-freeze-values>",
		},
    },
    "codecaves": {
		/* 
			Copy the ID of the enemy to zoom in on to the (repurposed) string pointer field in the last et_ex slot of the bullet mgr, 
			which is never used in vanilla, and very unlikely to be used in any mods (but not impossible!).
			This field is also used because it gets automatically copied to the bullets/lasers when they're shot,
			which saves a bunch of time in development. 
			
			The ID is chosen as follows: 
			If the enemy doesn't have the intangible flag, copy its own ID to the field. 
			If it IS intangible, check if the parent enemy is alive.
			If the parent enemy is alive and not intangible, copy the parent's ID to the field.
			Otherwise, set the field to 0.
		*/
		"Dai.ecl.etNew.set-enemy-id": {
            "access": "re",
            "code": "8B91 30510000 F7C2 20000000 8B81 88550000 74 24 8BB8 34680000 57 E8 [0x409990] 85C0 74 2C 57 E8 [0x42D500] 8B90 5C630000 F7C2 20000000 75 18 8B80 30680000 8B8D 90FAFFFF 898431 DC090000 E9 [0x436417] 8B8D 90FAFFFF C78431 DC090000 00000000 E9 [0x436417]",
        },
		
		"Dai.bullet.set-global-killer-enemy-id-if-hit": {
			"access": "re",
			"code": "8BF8 83FF 01 0F85 [0x424966] 8B96 B80A0000 8915 <codecave:Dai.global.killer-enemy-id> E9 [0x424957]",
		},
		"Dai.laser-line.set-global-killer-enemy-id-if-hit": {
			"access": "re",
			"code": "83F8 01 0F85 [0x44AAAC] 8B96 DC0B0000 8915 <codecave:Dai.global.killer-enemy-id> E9 [0x44AA63]",
		},
		"Dai.laser-infinite.set-global-killer-enemy-id-if-hit": {
			"access": "re",
			"code": "83F8 01 0F85 [0x44CF66] 8B96 040C0000 8915 <codecave:Dai.global.killer-enemy-id> E9 [0x44CF1D]",
		},
		"Dai.laser-curve.set-global-killer-enemy-id-if-hit": {
			"access": "re",
			"code": "83F8 01 0F85 [0x44FAA3] 8B96 D00B0000 8915 <codecave:Dai.global.killer-enemy-id> E9 [0x44F9F2]",
		},
		"Dai.enemy.set-global-killer-enemy-id-if-hit": {
			"access": "re",
			"code": "83F8 01 75 12 8B93 88550000 8B92 30680000 8915 <codecave:Dai.global.killer-enemy-id> F783 30510000 00020000 0F84 [0x42F69F] 83F8 02 0F85 [0x42F69F] E9 [0x42F67D]",
		},
		
		/*
			If the enemy that killed the player is alive, get its coordinates and store them in F0 and F1 variables of the arcade surface anm vm,
			and call an anm interrupt on said vm. Toggle freeze, play a sound, and pause the bgm.
		*/
		"Dai.player.initiate-zoom-on-death": {
			"access": "re",
			"code": "C787 34060000 FFFFFFFF 8B35 <codecave:Dai.global.killer-enemy-id> 56 E8 [0x409990] 85C0 0F84 [0x45C3D1] 56 E8 [0x42D500] 8B35 B8CF4C00 8B90 70120000 8996 B4040000 8B90 74120000 8996 B8040000 8B86 E0050000 85C0 74 09 BA 25000000 89F1 FFD0 C786 94040000 25000000 C705 <codecave:Dai.global.freeze-pre> 01000000 C705 <codecave:Dai.global.freeze> 00000000 C705 <codecave:Dai.global.freeze-timer> 3C000000 51 6A 38 E8 [0x476BE0] A1 C8CC4C00 24 30 3C 20 74 20 68 20674B00 6A 00 6A 06 B9 80AD5600 E8 [0x477A50] <nop:13> B9 80AD5600 E8 [0x476D20] 85C0 75 F2 E9 [0x45C3D1]",
		},
		
		//on-tick replacements that first check the freeze value and proceed to the original on-tick method if it's zero
		//player's on-tick handles updating freeze timer, checking input, and resuming gameplay. 	(Side note: I don't know why I decided to use player::on_tick specifically for this, and I could probably simplify things by handling it in the first on-tick method to be affected by the freeze instead, which is ReplayManager::on_tick... I think. But well, the mod works just fine so I'm keeping it like this for now.
		"Dai.player.on-tick-freeze": {
			"access": "re",
			"code": "833D A4F24C00 00 74 06 B8 01000000 C3 833D <codecave:Dai.global.freeze-pre> 00 74 63 C705 <codecave:Dai.global.freeze> 01000000 833D <codecave:Dai.global.freeze-timer> 00 74 0C FF0D <codecave:Dai.global.freeze-timer> B8 01000000 C3 F705 10A24C00 0B020000 75 06 B8 01000000 C3 C705 <codecave:Dai.global.freeze-pre> 00000000 A1 B8CF4C00 C780 94040000 26000000 68 846F4B00 6A 00 6A 07 B9 80AD5600 E8 [0x477A50] B8 01000000 C3 C705 <codecave:Dai.global.freeze> 00000000 E9 [0x45BE90]",
		},
		"Dai.enemy-manager.on-tick-freeze": {
			"access": "re",
			"code": "833D <codecave:Dai.global.freeze> 00 0F84 [0x42DF50] B8 01000000 C3"
		},
		"Dai.bullet-manager.on-tick-freeze": {
			"access": "re",
			"code": "833D <codecave:Dai.global.freeze> 00 0F84 [0x424E70] B8 01000000 C3"
		},
		"Dai.laser-manager.on-tick-freeze": {
			"access": "re",
			"code": "833D <codecave:Dai.global.freeze> 00 0F84 [0x448870] B8 01000000 C3"
		},
		"Dai.item-manager.on-tick-freeze": {
			"access": "re",
			"code": "833D <codecave:Dai.global.freeze> 00 0F84 [0x446EC0] B8 01000000 C3"
		},
		"Dai.effect-manager.on-tick-freeze": {
			"access": "re",
			"code": "833D <codecave:Dai.global.freeze> 00 0F84 [0x42AF30] B8 01000000 C3"
		},
		"Dai.stage.on-tick-freeze": {
			"access": "re",
			"code": "833D <codecave:Dai.global.freeze-pre> 00 0F84 [0x41C0A0] B8 01000000 C3"
		},
		"Dai.replay-manager.on-tick-record-freeze": {
			"access": "re",
			"code": "833D <codecave:Dai.global.freeze-pre> 00 0F84 [0x462940] B8 01000000 C3"
		},
		"Dai.replay-manager.on-tick-playback-freeze": {
			"access": "re",
			"code": "833D <codecave:Dai.global.freeze-pre> 00 0F84 [0x462A50] B8 01000000 C3"
		},
		"Dai.anm-manager.on-tick-world-freeze": {
			"access": "re",
			"code": "833D <codecave:Dai.global.freeze> 00 0F84 [0x488220] B8 01000000 C3"
		},
		
		//reset freeze values and jump to GameThread::thread_start
		"Dai.gamethread-start.reset-freeze-values": {
			"access": "re",
			"code": "C705 <codecave:Dai.global.freeze-pre> 00000000 C705 <codecave:Dai.global.freeze> 00000000 C705 <codecave:Dai.global.freeze-timer> 00000000 E9 [0x4424E0]",
		},
		"Dai.mainmenu.thread-start.reset-freeze-values": {
			"access": "re",
			"code": "C705 <codecave:Dai.global.freeze-pre> 00000000 C705 <codecave:Dai.global.freeze> 00000000 C705 <codecave:Dai.global.freeze-timer> 00000000 E9 [0x464B80]",
		},
		
		//ID of the enemy that killed the player
		"Dai.global.killer-enemy-id": {
            "access": "rw",
            "size": 4,
            "count": 1,
            "fill": "0x00",
        },
		//freeze value for update methods that occur before the player's, and for the player itself
		"Dai.global.freeze-pre": {
            "access": "rw",
            "size": 4,
            "count": 1,
            "fill": "0x00",
        },
		//freeze value for update methods that occur after the player's
		"Dai.global.freeze": {
            "access": "rw",
            "size": 4,
            "count": 1,
            "fill": "0x00",
        },
		//timer until the player can press a key to continue playing
		"Dai.global.freeze-timer": {
            "access": "rw",
            "size": 4,
            "count": 1,
            "fill": "0x00",
        },
    }
}
