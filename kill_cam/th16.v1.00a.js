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
			"val": "0xF9C",
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
			"val": "0x44B8"
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
			"val": "0x526C"
		},
		"zEnemyFull.enemy_id": {
			"type": "i32",
			"val": "0x5740"
		},
		"zEnemyFull.parent_id": {
			"type": "i32",
			"val": "0x5744"
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
			"val": "0x41A980"
		},
		"zEnemyManager::get_enemy_by_id": {
			"type": "u32",
			"val": "0x41A9C0"
		},
		"zSoundManager::play_sound_centered": {
			"type": "u32",
			"val": "0x45E150"
		},
		"zSoundManager::modify_bgm": {
			"type": "u32",
			"val": "0x45ED00"
		},
		"zSoundManager::update_sound_thread": {
			"type": "u32",
			"val": "0x45E330",
		},
		"zGlobals.flags.ptr": {
			"type": "u32",
			"val": "0x4A5BEC"
		},
		"bgm_pause_string_ptr": {
			"type": "u32",
			"val": "0x492AC4"
		},
		"bgm_unpause_string_ptr": {
			"type": "u32",
			"val": "0x492ABC"
		},
		"sound_manager_ptr": {
			"type": "u32",
			"val": "0x4D9E10",
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
			"val": "0x4C1298",
		},
		"hardware_input_ptr": { 
			"type": "u32",
			"val": "0x4A50B0"
		},
		
		"zPlayer::on_tick": {
			"type": "u32",
			"val": "0x443720"
		},
		"zEnemyManager::on_tick": {
			"type": "u32",
			"val": "0x41B4F0"
		},
		"zBulletManager::on_tick": {
			"type": "u32",
			"val": "0x412C50"
		},
		"zLaserManager::on_tick": {
			"type": "u32",
			"val": "0x4316B0"
		},
		"zItemManager::on_tick": {
			"type": "u32",
			"val": "0x4308F0"
		},
		"zEffectManager::on_tick": {
			"type": "u32",
			"val": "0x418AB0"
		},
		"zStage::on_tick": {
			"type": "u32",
			"val": "0x40A7A0"
		},
		"zReplayManager::on_tick_record": {
			"type": "u32",
			"val": "0x448E20"
		},
		"zReplayManager::on_tick_playback": {
			"type": "u32",
			"val": "0x448E30"
		},
		"zAnmManager::on_tick_world": {
			"type": "u32",
			"val": "0x46E710"
		},
		"zBomb::on_tick": {
			"type": "u32",
			"val": "0x40DA60"
		},
		"zSpellcard::on_tick": {
			"type": "u32",
			"val": "0x417EE0"
		},
		
		"zGameThread::thread_start": {
			"type": "u32",
			"val": "0x42CB60"
		},
		"zMainMenu::thread_start": {
			"type": "u32",
			"val": "0x44ABC0"
		},
	},
    "binhacks": {
		"Dai.enemy.set-last-tangible-parent-id.jump-to-cave": {
			"addr": 0x41AC1D,
            "expected": "8986 <option:zEnemyFull.parent_id>",
            "code": "E9 [codecave:Dai.enemy.set-last-tangible-parent-id.call] <int3:1>"
		},
		
        "Dai.ecl.etNew.jump-to-cave": {
            "addr": 0x420920,
            "expected": "E9 76210000",
            "code": "E9 [codecave:Dai.ecl.etNew.set-enemy-id.call]"
        },
		
		"Dai.bullet.ex-enm.set-parent-id.jump-to-cave": {
			"addr": 0x4147F4,
			"expected": "C745 B4 10270000",
			"code": "E9 [codecave:Dai.bullet.ex-enm.set-parent-id.call] <int3:2>"
		},
		
		"Dai.bullet.on-tick.jump-to-cave-after-try-kill": {
			"addr": 0x412563,
            "expected": "8BF8 83FF 01 0F85 D7000000",
            "code": "E9 [codecave:Dai.bullet.set-global-killer-enemy-id-if-hit] <int3:6>"
		},
		"Dai.laser-line.check-graze-or-kill.jump-to-cave-after-try-kill": {
			"addr": 0x43361A,
			"expected": "83F8 01 75 49",
			"code": "E9 [codecave:Dai.laser-line.set-global-killer-enemy-id-if-hit]",
		},
		"Dai.laser-infinite.check-graze-or-kill.jump-to-cave-after-try-kill": {
			"addr": 0x4356A8,
			"expected": "83F8 01 75 49",
			"code": "E9 [codecave:Dai.laser-infinite.set-global-killer-enemy-id-if-hit]",
		},
		"Dai.laser-curve.check-graze-or-kill.jump-to-cave-after-try-kill": {
			"addr": 0x437DB9,
			"expected": "83F8 01 0F85 B1000000",
			"code": "E9 [codecave:Dai.laser-curve.set-global-killer-enemy-id-if-hit] <int3:4>",
		},
		"Dai.enemy.on-tick.jump-to-cave-after-try-kill": {
			"addr": 0x41C9A0,
            "expected": "F787 60400000 00020000 74 27 83F8 02 75 22",
            "code": "E9 [codecave:Dai.enemy.set-global-killer-enemy-id-if-hit] <int3:12>",
		},
		
		"Dai.player.on-tick.jump-to-cave-after-death": {
			"addr": 0x4429FC,
			"expected": "C787 24060000 FFFFFFFF EB 18",
			"code": "E9 [codecave:Dai.player.initiate-zoom-on-death.call] <int3:7>",
		},
		
		//change the effect.anm script spawned upon death to one that's less visually cluttering for the zoom-in
		"Dai.player.change-death-effect-anm-script": {
			"addr": 0x443D1E,
			"expected": "1C",
			"code": "1D",
		},
		
		//replace several on-tick methods with codecaves that check the freeze value first, and then jump to the original on-tick method
		"Dai.player.replace-on-tick": {
			"addr": 0x441098,
			"expected": "<option:zPlayer::on_tick>",
			"code": "<codecave:Dai.player.on-tick-freeze>",
		},
		"Dai.enemy-manager.replace-on-tick": {
			"addr": 0x41AF2F,
			"expected": "<option:zEnemyManager::on_tick>",
			"code": "<codecave:Dai.enemy-manager.on-tick-freeze>",
		},
		"Dai.bullet-manager.replace-on-tick": {
			"addr": 0x411A73,
			"expected": "<option:zBulletManager::on_tick>",
			"code": "<codecave:Dai.bullet-manager.on-tick-freeze>",
		},
		"Dai.laser-manager.replace-on-tick": {
			"addr": 0x431365,
			"expected": "<option:zLaserManager::on_tick>",
			"code": "<codecave:Dai.laser-manager.on-tick-freeze>",
		},
		"Dai.item-manager.replace-on-tick": {
			"addr": 0x42F263,
			"expected": "<option:zItemManager::on_tick>",
			"code": "<codecave:Dai.item-manager.on-tick-freeze>",
		},
		"Dai.effect-manager.replace-on-tick": {
			"addr": 0x418819,
			"expected": "<option:zEffectManager::on_tick>",
			"code": "<codecave:Dai.effect-manager.on-tick-freeze>",
		},
		"Dai.stage.replace-on-tick": {
			"addr": 0x4098BF,
			"expected": "<option:zStage::on_tick>",
			"code": "<codecave:Dai.stage.on-tick-freeze>",
		},
		"Dai.replay-manager.replace-on-tick-record": {
			"addr": 0x447991,
			"expected": "<option:zReplayManager::on_tick_record>",
			"code": "<codecave:Dai.replay-manager.on-tick-record-freeze>",
		},
		"Dai.replay-manager.replace-on-tick-playback": {
			"addr": 0x447B99,
			"expected": "<option:zReplayManager::on_tick_playback>",
			"code": "<codecave:Dai.replay-manager.on-tick-playback-freeze>",
		},
		"Dai.anm-manager.replace-on-tick-world": {
			"addr": 0x46A6E7,
			"expected": "<option:zAnmManager::on_tick_world>",
			"code": "<codecave:Dai.anm-manager.on-tick-world-freeze>",
		},
		"Dai.bomb.replace-on-tick": {
			"addr": 0x40D607,
			"expected": "<option:zBomb::on_tick>",
			"code": "<codecave:Dai.bomb.on-tick-freeze>",
		},
		"Dai.spellcard.replace-on-tick": {
			"addr": 0x417703,
			"expected": "<option:zSpellcard::on_tick>",
			"code": "<codecave:Dai.spellcard.on-tick-freeze>",
		},
		
		//reset the freeze values when the game thread or the main menu thread initializes
		"Dai.gamethread-start.reset-freeze-values.jump-to-cave": {
			"addr": 0x42D1F0,
			"expected": "E9 [<option:zGameThread::thread_start>]",
			"code": "E9 [codecave:Dai.gamethread-start.reset-freeze-values]",
		},
		"Dai.mainmenu.thread-start.replace": {
			"addr": [
				0x44AF1C,
				0x44AF25,
			],
			"expected": "<option:zMainMenu::thread_start>",
			"code": "<codecave:Dai.mainmenu.thread-start.reset-freeze-values>",
		},
		"Dai.pause.prevent-bgm-pause-if-already-zoomed.jump-to-cave.0": {
			"addr": 0x43F17B,
			"expected": "A1 <option:zGlobals.flags.ptr>",
			"code": "E9 [codecave:Dai.pause.prevent-bgm-pause-if-already-zoomed.0]",
		},
		"Dai.pause.prevent-bgm-pause-if-already-zoomed.jump-to-cave.1": {
			"addr": 0x43F3F2,
			"expected": "A1 <option:zGlobals.flags.ptr>",
			"code": "E9 [codecave:Dai.pause.prevent-bgm-pause-if-already-zoomed.1]",
		},
		"Dai.pause.prevent-bgm-pause-if-already-zoomed.jump-to-cave.2": {
			"addr": 0x43F2FD,
			"expected": "68 <option:bgm_pause_string_ptr>",
			"code": "E9 [codecave:Dai.pause.prevent-bgm-pause-if-already-zoomed.2]",
		},
		"Dai.unpause.prevent-bgm-unpause-if-already-zoomed.jump-to-cave": {
			"addr": 0x4409AD,
			"expected": "68 <option:bgm_unpause_string_ptr>",
			"code": "E9 [codecave:Dai.unpause.prevent-bgm-unpause-if-already-zoomed]",
		},
		
		"Dai.wrap-enemy-id-to-16-bit-limit": {
			"addr": 0x41B86B,
			"expected": "8B81 90000000 8981 94000000 83C0 01 0F44C2 8981 90000000",
			"code": "8981 94000000 83C0 01 25 FFFF0000 0F44C2 8981 90000000 <nop:1>"
		},
    },
    "codecaves": {
		"Dai.enemy.set-last-tangible-parent-id.call": {
			"access": "re",
			"code": "8986 <option:zEnemyFull.parent_id> 56 E8 [<codecave:Dai.enemy.set-last-tangible-parent-id>] E9 [0x41AC23]",
		},
		"Dai.ecl.etNew.set-enemy-id.call": {
			"access": "re",
			"code": "8D8431 (<option:zEnemy.bullet_mgrs>+<option:zBulletMgr.last_ex_string>) 8B95 D4FBFFFF 50 FFB2 <option:zEnemy.full> E8 [<codecave:Dai.ecl.etNew.set-enemy-id>] E9 [0x4209CA]",
		},
		"Dai.bullet.ex-enm.set-parent-id.call": {
			"access": "re",
			"code": "C745 B4 10270000 53 E8 [codecave:Dai.bullet.ex-enm.set-parent-id] 8945 F0 E9 [0x4147FB]",
		},
		"Dai.bullet.set-global-killer-enemy-id-if-hit": {
			"access": "re",
			"code": "8BF8 83FF 01 0F85 [0x412645] 8B96 <option:zBullet.last-ex.string> 8915 <codecave:Dai.global.killer-enemy-id> E9 [0x41256E]",
		},
		"Dai.laser-line.set-global-killer-enemy-id-if-hit": {
			"access": "re",
			"code": "83F8 01 0F85 [0x433668] 8B96 <option:zLaserLine.last-ex.string> 8915 <codecave:Dai.global.killer-enemy-id> E9 [0x43361F]",
		},
		"Dai.laser-infinite.set-global-killer-enemy-id-if-hit": {
			"access": "re",
			"code": "83F8 01 0F85 [0x4356F6] 8B96 <option:zLaserInfinite.last-ex.string> 8915 <codecave:Dai.global.killer-enemy-id> E9 [0x4356AD]",
		},
		"Dai.laser-curve.set-global-killer-enemy-id-if-hit": {
			"access": "re",
			"code": "83F8 01 0F85 [0x437E73] 8B96 <option:zLaserCurve.last-ex.string> 8915 <codecave:Dai.global.killer-enemy-id> E9 [0x437DC2]",
		},
		"Dai.enemy.set-global-killer-enemy-id-if-hit": {
			"access": "re",
			"code": "83F8 01 75 1F 50 8B97 <option:zEnemy.full> 8B82 <option:zEnemyFull.last_tangible_parent_id> 8B92 <option:zEnemyFull.enemy_id> C1E0 10 09C2 8915 <codecave:Dai.global.killer-enemy-id> 58 F787 60400000 00020000 0F84 [0x41C9D3] 83F8 02 0F85 [0x41C9D3] E9 [0x41C9B1]",
		},
		
		"Dai.player.initiate-zoom-on-death.call": {
			"access": "re",
			"code": "C787 24060000 FFFFFFFF E8 [codecave:Dai.player.initiate-zoom-on-death] E9 [0x442A20]",
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
			"code": "833D <codecave:Dai.global.freeze-pre> 01 0F84 [0x43F1A0] A1 <option:zGlobals.flags.ptr> E9 [0x43F180]",
		},
		"Dai.pause.prevent-bgm-pause-if-already-zoomed.1": {
			"access": "re",
			"code": "833D <codecave:Dai.global.freeze-pre> 01 0F84 [0x43F410] A1 <option:zGlobals.flags.ptr> E9 [0x43F3F7]",
		},
		"Dai.pause.prevent-bgm-pause-if-already-zoomed.2": {
			"access": "re",
			"code": "833D <codecave:Dai.global.freeze-pre> 01 0F84 [0x43F310] 68 <option:bgm_pause_string_ptr> E9 [0x43F302]",
		},
		"Dai.unpause.prevent-bgm-unpause-if-already-zoomed": {
			"access": "re",
			"code": "833D <codecave:Dai.global.freeze-pre> 01 0F84 [0x440B50] 68 <option:bgm_unpause_string_ptr> E9 [0x4409B2]",
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
