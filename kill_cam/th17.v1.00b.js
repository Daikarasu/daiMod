{
	"options": {
		"zAnmVm.pending_switch_label": {
			"type": "i32",
			"val": "0x490"
		},
		"zAnmVm.float_script_vars.0": {
			"type": "i32",
			"val": "0x4B0"
		},
		"zAnmVm.float_script_vars.1": {
			"type": "i32",
			"val": "0x4B4"
		},
		"zBulletMgr.last_ex_d": {
			"type": "i32",
			"val": "0x330"
		},
		"zBulletMgr.last_ex_string": {
			"type": "i32",
			"val": "0x33C"
		},
		"zBullet.last-ex.string": {
			"type": "i32",
			"val": "0x9A0",
		},
		"zLaserLine.last-ex.string": {
			"type": "i32",
			"val": "0x920",
		},
		"zLaserInfinite.last-ex.string": {
			"type": "i32",
			"val": "0x948",
		},
		"zLaserCurve.last-ex.string": {
			"type": "i32",
			"val": "0x914",
		},
		"zEnemy.bullet_mgrs": {
			"type": "i32",
			"val": "0x598"
		},
		"zEnemy.full": {
			"type": "i32",
			"val": "0x44D8"
		},
		"zEnemyFlag.intangible": {
			"type": "i32",
			"val": "0x20"
		},
		"zEnemyFlag.no_hit_hurt_invisible": {
			"type": "i8",
			"val": "0x13" //(1 | 2 | 16)
		},
		"zEnemyFull.enemy": {
			"type": "i32",
			"val": "0x120C"
		},
		"zEnemyFull.flags_lo": {
			"type": "i32",
			"val": "0x528C"
		},
		"zEnemyFull.enemy_id": {
			"type": "i32",
			"val": "0x5760"
		},
		"zEnemyFull.parent_id": {
			"type": "i32",
			"val": "0x5764"
		},
		"zEnemyFull.final_pos.x": {
			"type": "i32",
			"val": "0x1250"
		},
		"zEnemyFull.final_pos.y": {
			"type": "i32",
			"val": "0x1254"
		},
		"zEnemyFull.kill_count_field": { //unused field repurposed as kill count tracker
			"type": "i32",
			"val": "(<option:zEnemyFull.enemy>+<option:zEnemy.bullet_mgrs>+(0x380*0x0F)+<option:zBulletMgr.last_ex_d>)" //zEnemyFull.enemy + zEnemy.bullet_mgrs+(sizeof(zBulletMgr)*(bullet_mgr_count-1))+zBulletMgr.last_ex_d
		},
		"zEnemyFull.last_tangible_parent_id": { //unused field repurposed as field that holds enemy ID of last parent in family tree that is not intangible
			"type": "i32",
			"val": "(<option:zEnemyFull.enemy>+<option:zEnemy.bullet_mgrs>+(0x380*0x0F)+<option:zBulletMgr.last_ex_string>)" //zEnemyFull.enemy + zEnemy.bullet_mgrs+(sizeof(zBulletMgr)*(bullet_mgr_count-1))+zBulletMgr.last_ex_string
		},
		"zEnemyManager::enemy_id_is_alive": {
			"type": "u32",
			"val": "0x41DD90"
		},
		"zEnemyManager::get_enemy_by_id": {
			"type": "u32",
			"val": "0x41DDD0"
		},
		"zSoundManager::play_sound_centered": {
			"type": "u32",
			"val": "0x465450"
		},
		"zSoundManager::modify_bgm": {
			"type": "u32",
			"val": "0x4662E0"
		},
		"zSoundManager::update_sound_thread": {
			"type": "u32",
			"val": "0x465660",
		},
		"zGlobals.flags.ptr": {
			"type": "u32",
			"val": "0x4B59C8"
		},
		"bgm_pause_string_ptr": {
			"type": "u32",
			"val": "0x4A1FA8"
		},
		"bgm_unpause_string_ptr": {
			"type": "u32",
			"val": "0x4A1FA0"
		},
		"sound_manager_ptr": {
			"type": "u32",
			"val": "0x5247F0",
		},
		"zoom_sound_index": { 
			"type": "u8",
			"val": "0x38"
		},
		"nemesis_sound_index": { 
			"type": "u8",
			"val": "0x3A"
		},
		"revenge_sound_index": { 
			"type": "u8",
			"val": "0x44"
		},
		"arcade_surface_vm_ptr": {
			"type": "u32",
			"val": "0x4B5CA8",
		},
		"hardware_input_ptr": { 
			"type": "u32",
			"val": "0x4B3230"
		},
		
		"zPlayer::on_tick": {
			"type": "u32",
			"val": "0x448CE0"
		},
		"zEnemyManager::on_tick": {
			"type": "u32",
			"val": "0x41E880"
		},
		"zBulletManager::on_tick": {
			"type": "u32",
			"val": "0x415980"
		},
		"zLaserManager::on_tick": {
			"type": "u32",
			"val": "0x435510"
		},
		"zItemManager::on_tick": {
			"type": "u32",
			"val": "0x4346D0"
		},
		"zEffectManager::on_tick": {
			"type": "u32",
			"val": "0x41B7D0"
		},
		"zStage::on_tick": {
			"type": "u32",
			"val": "0x40AD50"
		},
		"zReplayManager::on_tick_record": {
			"type": "u32",
			"val": "0x44F1A0"
		},
		"zReplayManager::on_tick_playback": {
			"type": "u32",
			"val": "0x44F2F0"
		},
		"zAnmManager::on_tick_world": {
			"type": "u32",
			"val": "0x475B60"
		},
		"zBomb::on_tick": {
			"type": "u32",
			"val": "0x411870"
		},
		"zSpellcard::on_tick": {
			"type": "u32",
			"val": "0x41AB30"
		},
		"zGoastManager::on_tick": { //th17-only
			"type": "u32",
			"val": "0x40F960"
		},
		
		"zGameThread::thread_start": {
			"type": "u32",
			"val": "0x430080"
		},
		"zMainMenu::thread_start": {
			"type": "u32",
			"val": "0x4510D0"
		},
	},
    "binhacks": {
		"Dai.enemy.set-last-tangible-parent-id.jump-to-cave": {
			"addr": 0x41E257,
            "expected": "8986 <option:zEnemyFull.parent_id>",
            "code": "E9 [codecave:Dai.enemy.set-last-tangible-parent-id.call] <int3:1>"
		},
		
        "Dai.ecl.etNew.jump-to-cave": {
            "addr": 0x42410D,
            "expected": "E9 E0240000",
            "code": "E9 [codecave:Dai.ecl.etNew.set-enemy-id.call]"
        },
		
		"Dai.bullet.ex-enm.set-parent-id.jump-to-cave": {
			"addr": 0x417AAC,
			"expected": "C78424 8C000000 00000000",
			"code": "E9 [codecave:Dai.bullet.ex-enm.set-parent-id.call] <int3:6>"
		},
		
		"Dai.bullet.on-tick.jump-to-cave-after-try-kill": {
			"addr": 0x4154BE,
            "expected": "8BF8 83FF 01 0F85 EE000000",
            "code": "E9 [codecave:Dai.bullet.set-global-killer-enemy-id-if-hit] <int3:6>"
		},
		"Dai.laser-line.check-graze-or-kill.jump-to-cave-after-try-kill": {
			"addr": 0x43793E,
			"expected": "83F8 01 75 49",
			"code": "E9 [codecave:Dai.laser-line.set-global-killer-enemy-id-if-hit]",
		},
		"Dai.laser-infinite.check-graze-or-kill.jump-to-cave-after-try-kill": {
			"addr": 0x43A178,
			"expected": "83F8 01 75 49",
			"code": "E9 [codecave:Dai.laser-infinite.set-global-killer-enemy-id-if-hit]",
		},
		"Dai.laser-curve.check-graze-or-kill.jump-to-cave-after-try-kill": {
			"addr": 0x43D299,
			"expected": "83F8 01 0F85 B1000000",
			"code": "E9 [codecave:Dai.laser-curve.set-global-killer-enemy-id-if-hit] <int3:4>",
		},
		"Dai.enemy.on-tick.jump-to-cave-after-try-kill": {
			"addr": 0x41FEEC,
            "expected": "F783 80400000 00020000 74 27 83F8 02 75 22",
            "code": "E9 [codecave:Dai.enemy.set-global-killer-enemy-id-if-hit] <int3:12>",
		},
		
		"Dai.player.on-tick.jump-to-cave-after-death": {
			"addr": 0x447ECF,
			"expected": "C787 24060000 FFFFFFFF EB 18",
			"code": "E9 [codecave:Dai.player.initiate-zoom-on-death.call] <int3:7>",
		},
		
		//change the effect.anm script spawned upon death to one that's less visually cluttering for the zoom-in
		"Dai.player.change-death-effect-anm-script": {
			"addr": 0x4491FF,
			"expected": "1C",
			"code": "1D",
		},
		
		//replace several on-tick methods with codecaves that check the freeze value first, and then jump to the original on-tick method
		"Dai.player.replace-on-tick": {
			"addr": 0x4464EF,
			"expected": "<option:zPlayer::on_tick>",
			"code": "<codecave:Dai.player.on-tick-freeze>",
		},
		"Dai.enemy-manager.replace-on-tick": {
			"addr": 0x41E614,
			"expected": "<option:zEnemyManager::on_tick>",
			"code": "<codecave:Dai.enemy-manager.on-tick-freeze>",
		},
		"Dai.bullet-manager.replace-on-tick": {
			"addr": 0x414896,
			"expected": "<option:zBulletManager::on_tick>",
			"code": "<codecave:Dai.bullet-manager.on-tick-freeze>",
		},
		"Dai.laser-manager.replace-on-tick": {
			"addr": 0x43073C,
			"expected": "<option:zLaserManager::on_tick>",
			"code": "<codecave:Dai.laser-manager.on-tick-freeze>",
		},
		"Dai.item-manager.replace-on-tick": {
			"addr": 0x433231,
			"expected": "<option:zItemManager::on_tick>",
			"code": "<codecave:Dai.item-manager.on-tick-freeze>",
		},
		"Dai.effect-manager.replace-on-tick": {
			"addr": 0x440679,
			"expected": "<option:zEffectManager::on_tick>",
			"code": "<codecave:Dai.effect-manager.on-tick-freeze>",
		},
		"Dai.stage.replace-on-tick": {
			"addr": 0x409C06,
			"expected": "<option:zStage::on_tick>",
			"code": "<codecave:Dai.stage.on-tick-freeze>",
		},
		"Dai.replay-manager.replace-on-tick-record": {
			"addr": 0x44DE41,
			"expected": "<option:zReplayManager::on_tick_record>",
			"code": "<codecave:Dai.replay-manager.on-tick-record-freeze>",
		},
		"Dai.replay-manager.replace-on-tick-playback": {
			"addr": 0x44E048,
			"expected": "<option:zReplayManager::on_tick_playback>",
			"code": "<codecave:Dai.replay-manager.on-tick-playback-freeze>",
		},
		"Dai.anm-manager.replace-on-tick-world": {
			"addr": 0x471D63,
			"expected": "<option:zAnmManager::on_tick_world>",
			"code": "<codecave:Dai.anm-manager.on-tick-world-freeze>",
		},
		"Dai.bomb.replace-on-tick": {
			"addr": 0x41167B,
			"expected": "<option:zBomb::on_tick>",
			"code": "<codecave:Dai.bomb.on-tick-freeze>",
		},
		"Dai.spellcard.replace-on-tick": {
			"addr": 0x430AD7,
			"expected": "<option:zSpellcard::on_tick>",
			"code": "<codecave:Dai.spellcard.on-tick-freeze>",
		},
		"Dai.goast-manager.replace-on-tick": { //th17-only
			"addr": 0x40E4E4,
			"expected": "<option:zGoastManager::on_tick>",
			"code": "<codecave:Dai.goast-manager.on-tick-freeze>",
		},
		
		//reset the freeze values when the game thread or the main menu thread initializes
		"Dai.gamethread-start.reset-freeze-values.jump-to-cave": {
			"addr": 0x430D66,
			"expected": "E9 [<option:zGameThread::thread_start>]",
			"code": "E9 [codecave:Dai.gamethread-start.reset-freeze-values]",
		},
		"Dai.mainmenu.thread-start.replace": {
			"addr": [
				0x4513E6,
				0x4513FA,
			],
			"expected": "<option:zMainMenu::thread_start>",
			"code": "<codecave:Dai.mainmenu.thread-start.reset-freeze-values>",
		},
		"Dai.pause.prevent-bgm-pause-if-already-zoomed.jump-to-cave.0": {
			"addr": 0x443B9F,
			"expected": "A1 <option:zGlobals.flags.ptr>",
			"code": "E9 [codecave:Dai.pause.prevent-bgm-pause-if-already-zoomed.0]",
		},
		"Dai.pause.prevent-bgm-pause-if-already-zoomed.jump-to-cave.1": {
			"addr": 0x444872,
			"expected": "A1 <option:zGlobals.flags.ptr>",
			"code": "E9 [codecave:Dai.pause.prevent-bgm-pause-if-already-zoomed.1]",
		},
		"Dai.pause.prevent-bgm-pause-if-already-zoomed.jump-to-cave.2": {
			"addr": 0x444788,
			"expected": "68 <option:bgm_pause_string_ptr>",
			"code": "E9 [codecave:Dai.pause.prevent-bgm-pause-if-already-zoomed.2]",
		},
		"Dai.unpause.prevent-bgm-unpause-if-already-zoomed.jump-to-cave": {
			"addr": 0x445EFF,
			"expected": "68 <option:bgm_unpause_string_ptr>",
			"code": "E9 [codecave:Dai.unpause.prevent-bgm-unpause-if-already-zoomed]",
		},
		
		"Dai.wrap-enemy-id-to-16-bit-limit": {
			"addr": 0x41ED3E,
			"expected": "83C0 01 8981 90000000 75 07 40",
			"code": "83C0 01 25 FFFF0000 75 02 40 <nop:1>"
		},
    },
    "codecaves": {
		"Dai.enemy.set-last-tangible-parent-id.call": {
			"access": "re",
			"code": "8986 <option:zEnemyFull.parent_id> 56 E8 [<codecave:Dai.enemy.set-last-tangible-parent-id>] E9 [0x41E25D]",
		},
		"Dai.ecl.etNew.set-enemy-id.call": {
			"access": "re",
			"code": "8D8431 (<option:zEnemy.bullet_mgrs>+<option:zBulletMgr.last_ex_string>) 8B95 94FBFFFF 50 FFB2 <option:zEnemy.full> E8 [<codecave:Dai.ecl.etNew.set-enemy-id>] E9 [0x4265F2]",
		},
		"Dai.bullet.ex-enm.set-parent-id.call": {
			"access": "re",
			"code": "53 E8 [codecave:Dai.bullet.ex-enm.set-parent-id] 898424 8C000000 E9 [0x417AB7]",
		},
		"Dai.bullet.set-global-killer-enemy-id-if-hit": {
			"access": "re",
			"code": "8BF8 83FF 01 0F85 [0x4155B7] 8B96 <option:zBullet.last-ex.string> 8915 <codecave:Dai.global.killer-enemy-id> E9 [0x4154C9]",
		},
		"Dai.laser-line.set-global-killer-enemy-id-if-hit": {
			"access": "re",
			"code": "83F8 01 0F85 [0x43798C] 8B96 <option:zLaserLine.last-ex.string> 8915 <codecave:Dai.global.killer-enemy-id> E9 [0x437943]",
		},
		"Dai.laser-infinite.set-global-killer-enemy-id-if-hit": {
			"access": "re",
			"code": "83F8 01 0F85 [0x43A1C6] 8B96 <option:zLaserInfinite.last-ex.string> 8915 <codecave:Dai.global.killer-enemy-id> E9 [0x43A17D]",
		},
		"Dai.laser-curve.set-global-killer-enemy-id-if-hit": {
			"access": "re",
			"code": "83F8 01 0F85 [0x43D353] 8B96 <option:zLaserCurve.last-ex.string> 8915 <codecave:Dai.global.killer-enemy-id> E9 [0x43D2A2]",
		},
		"Dai.enemy.set-global-killer-enemy-id-if-hit": {
			"access": "re",
			"code": "83F8 01 75 1F 50 8B93 <option:zEnemy.full> 8B82 <option:zEnemyFull.last_tangible_parent_id> 8B92 <option:zEnemyFull.enemy_id> C1E0 10 09C2 8915 <codecave:Dai.global.killer-enemy-id> 58 F783 80400000 00020000 0F84 [0x41FF1F] 83F8 02 0F85 [0x41FF1F] E9 [0x41FEFD]",
		},
		
		"Dai.player.initiate-zoom-on-death.call": {
			"access": "re",
			"code": "C787 24060000 FFFFFFFF E8 [codecave:Dai.player.initiate-zoom-on-death] E9 [0x447EF3]",
		},
		
		//on-tick replacements that first check the freeze value and proceed to the original on-tick method if it's zero
		//player's on-tick handles updating freeze timer, checking input, and resuming gameplay. 	(Side note: I don't know why I decided to use player::on_tick specifically for this, and I could probably simplify things by handling it in the first on-tick method to be affected by the freeze instead, which is ReplayManager::on_tick... I think. But well, the mod works just fine so I'm keeping it like this for now.
		"Dai.enemy-manager.on-tick-freeze": {
			"access": "re",
			"code": "833D <codecave:Dai.global.freeze> 00 0F84 [<option:zEnemyManager::on_tick>] B8 01000000 C3"
		},
		"Dai.bullet-manager.on-tick-freeze": {
			"access": "re",
			"code": "833D <codecave:Dai.global.freeze> 00 0F84 [<option:zBulletManager::on_tick>] B8 01000000 C3"
		},
		"Dai.laser-manager.on-tick-freeze": {
			"access": "re",
			"code": "833D <codecave:Dai.global.freeze> 00 0F84 [<option:zLaserManager::on_tick>] B8 01000000 C3"
		},
		"Dai.item-manager.on-tick-freeze": {
			"access": "re",
			"code": "833D <codecave:Dai.global.freeze> 00 0F84 [<option:zItemManager::on_tick>] B8 01000000 C3"
		},
		"Dai.effect-manager.on-tick-freeze": {
			"access": "re",
			"code": "833D <codecave:Dai.global.freeze> 00 0F84 [<option:zEffectManager::on_tick>] B8 01000000 C3"
		},
		"Dai.stage.on-tick-freeze": {
			"access": "re",
			"code": "833D <codecave:Dai.global.freeze-pre> 00 0F84 [<option:zStage::on_tick>] B8 01000000 C3"
		},
		"Dai.replay-manager.on-tick-record-freeze": {
			"access": "re",
			"code": "833D <codecave:Dai.global.freeze-pre> 00 0F84 [<option:zReplayManager::on_tick_record>] B8 01000000 C3"
		},
		"Dai.replay-manager.on-tick-playback-freeze": {
			"access": "re",
			"code": "833D <codecave:Dai.global.freeze-pre> 00 0F84 [<option:zReplayManager::on_tick_playback>] B8 01000000 C3"
		},
		"Dai.anm-manager.on-tick-world-freeze": {
			"access": "re",
			"code": "833D <codecave:Dai.global.freeze> 00 0F84 [<option:zAnmManager::on_tick_world>] B8 01000000 C3"
		},
		"Dai.bomb.on-tick-freeze": {
			"access": "re",
			"code": "833D <codecave:Dai.global.freeze> 00 0F84 [<option:zBomb::on_tick>] B8 01000000 C3"
		},
		"Dai.spellcard.on-tick-freeze": {
			"access": "re",
			"code": "833D <codecave:Dai.global.freeze> 00 0F84 [<option:zSpellcard::on_tick>] B8 01000000 C3"
		},
		"Dai.goast-manager.on-tick-freeze": { //th17-only
			"access": "re",
			"code": "833D <codecave:Dai.global.freeze> 00 0F84 [<option:zGoastManager::on_tick>] B8 01000000 C3"
		},
		
		//reset freeze values and jump to GameThread::thread_start
		"Dai.gamethread-start.reset-freeze-values": {
			"access": "re",
			"code": "C705 <codecave:Dai.global.freeze-pre> 00000000 C705 <codecave:Dai.global.freeze> 00000000 C705 <codecave:Dai.global.freeze-timer> 00000000 E9 [<option:zGameThread::thread_start>]",
		},
		"Dai.mainmenu.thread-start.reset-freeze-values": {
			"access": "re",
			"code": "C705 <codecave:Dai.global.freeze-pre> 00000000 C705 <codecave:Dai.global.freeze> 00000000 C705 <codecave:Dai.global.freeze-timer> 00000000 E9 [<option:zMainMenu::thread_start>]",
		},
		
		"Dai.pause.prevent-bgm-pause-if-already-zoomed.0": {
			"access": "re",
			"code": "833D <codecave:Dai.global.freeze-pre> 01 0F84 [0x443BC0] A1 <option:zGlobals.flags.ptr> E9 [0x443BA4]",
		},
		"Dai.pause.prevent-bgm-pause-if-already-zoomed.1": {
			"access": "re",
			"code": "833D <codecave:Dai.global.freeze-pre> 01 0F84 [0x444890] A1 <option:zGlobals.flags.ptr> E9 [0x444877]",
		},
		"Dai.pause.prevent-bgm-pause-if-already-zoomed.2": {
			"access": "re",
			"code": "833D <codecave:Dai.global.freeze-pre> 01 0F84 [0x44479B] 68 <option:bgm_pause_string_ptr> E9 [0x44478D]",
		},
		"Dai.unpause.prevent-bgm-unpause-if-already-zoomed": {
			"access": "re",
			"code": "833D <codecave:Dai.global.freeze-pre> 01 0F84 [0x4460A5] 68 <option:bgm_unpause_string_ptr> E9 [0x445F04]",
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
