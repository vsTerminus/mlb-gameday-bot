module.exports = {
    EVENT_BLACKLIST: [
        "batter_timeout",
        "mound_visit",
        "offensive_substitution",
        "defensive_switch",
        "foul",
        "ball",
        "called_strike",
        "swinging_strike",
        "swinging_strike_blocked",
        "hit_into_play",
        "pickoff_1b",
        "pickoff_2b",
        "pickoff_3b",
        "hit_into_play_no_out",
        "foul_tip",
        "at_bat_start",
        "blocked_ball",
        "defensive_indiff",
        "pitcher_step_off",
        "no_pitch",
        "ejection",
        "injury",
        "umpire_substitution"
    ],
    EVENT_WHITELIST:[
        'pickoff_1b',
        'pickoff_2b',
        'pickoff_3b',
        'pickoff_error_1b',
        'pickoff_error_2b',
        'pickoff_error_3b',
        'single',
        'double',
        'triple',
        'home_run',
        'double_play',
        'field_error',
        'error',
        'field_out',
        'fielders_choice',
        'fielders_choice_out',
        'force_out',
        'grounded_into_double_play',
        'grounded_into_triple_play',
        'strikeout',
        'strike_out',
        'strikeout_double_play',
        'strikout_triple_play',
        'triple_play',
        'sac_fly',
        'catcher_interf',
        'batter_interference',
        'fielder_interference',
        'runner_interference',
        'fan_interference',
        'ejection',
        'cs_double_play',
        'defensive_indiff',
        'sac_fly_double_play',
        'sac_bunt',
        'sac_bunt_double_play',
        'walk',
        'intent_walk',
        'hit_by_pitch',
        'injury',
        'passed_ball',
        'other_advance',
        'runner_double_play',
        'pitching_substitution',
        'offensive_substitution',
        'pitcher_switch',
        'stolen_base',
        'stolen_base_2b',
        'stolen_base_3b',
        'stolen_base_home',
        'caught_stealing',
        'caught_stealing_2b',
        'caught_stealing_3b',
        'caught_stealing_home',
        'pickoff_caught_stealing_2b',
        'pickoff_caught_stealing_3b',
        'pickoff_caught_stealing_home',
        'balk',
        'forced_balk',
        'wild_pitch',
        'other_out'
    ],
    GUARDIANS: 114, // guardians team ID for MLB stats API
    AL_CENTRAL: 202,
    AMERICAN_LEAGUE: 103,
    SAVANT_POLLING_INTERVAL: 15000,
    SAVANT_MAX_ATTEMPTS: 12,
    SLOW_POLL_INTERVAL: 300000,
    GAMEDAY_PING_INTERVAL: 10000,
    HIGHLIGHTS_PER_MESSAGE: 8,
    SCORING_PLAYS_PER_MESSAGE: 8,
    DATE: null,
    ADMIN_ROLES: [ "Mod" ],
    TEAM_COLOR_CONTRAST_RATIO: 1.5,
    EVENTS: [
        "Double",
        "Double Play",
        "Field Error",
        "Fielders Choice Out",
        "Flyout",
        "Forceout",
        "Grounded Into DP",
        "Groundout",
        "Hit By Pitch",
        "Home Run",
        "Intent Walk",
        "Lineout",
        "Pop Out",
        "Single",
        "Strikeout",
        "Triple",
        "Walk"
    ],
    LOG_LEVEL: {
        INFO: 'info',
        DEBUG: 'debug',
        ERROR: 'error',
        WARN: 'warn',
        TRACE: 'trace'
    },
    TEAMS: [
        {
            "id": 133,
            "name": "Athletics",
            primaryColor: "#003831",
            secondaryColor: "#EFB21E"
        },
        {
            "id": 134,
            "name": "Pirates",
            primaryColor: "#FDB827",
            secondaryColor: "#27251F"
        },
        {
            "id": 135,
            "name": "Padres",
            primaryColor: "#2F241D",
            secondaryColor: "#FFC425"
        },
        {
            "id": 136,
            "name": "Mariners",
            primaryColor: "#005C5C",
            secondaryColor: "#0C2C56"
        },
        {
            "id": 137,
            "name": "Giants",
            primaryColor: "#FD5A1E",
            secondaryColor: "#27251F"
        },
        {
            "id": 138,
            "name": "Cardinals",
            primaryColor: "#C41E3A",
            secondaryColor: "#0C2340"
        },
        {
            "id": 139,
            "name": "Rays",
            primaryColor: "#8FBCE6",
            secondaryColor: "#092C5C"
        },
        {
            "id": 140,
            "name": "Rangers",
            primaryColor: "#003278",
            secondaryColor: "#C0111F"
        },
        {
            "id": 141,
            "name": "Blue Jays",
            primaryColor: "#134A8E",
            secondaryColor: "#1D2D5C"
        },
        {
            "id": 142,
            "name": "Twins",
            primaryColor: "#002B5C",
            secondaryColor: "#D31145"
        },
        {
            "id": 143,
            "name": "Phillies",
            primaryColor: "#E81828",
            secondaryColor: "#002D72"
        },
        {
            "id": 144,
            "name": "Braves",
            "primaryColor": "#CE1141",
            secondaryColor: "#13274F"
        },
        {
            "id": 145,
            "name": "White Sox",
            primaryColor: "#27251F",
            secondaryColor: "#C4CED4"
        },
        {
            "id": 146,
            "name": "Marlins",
            primaryColor: "#00A3E0",
            secondaryColor: "#EF3340",
        },
        {
            "id": 147,
            "name": "Yankees",
            primaryColor: "#C4CED3",
            secondaryColor: "#0C2340"
        },
        {
            "id": 158,
            "name": "Brewers",
            primaryColor: "#FFC52F",
            secondaryColor: "#12284B"
        },
        {
            "id": 108,
            "name": "Angels",
            primaryColor: "#BA0021",
            secondaryColor: "#003263"
        },
        {
            "id": 109,
            "name": "D-backs",
            "primaryColor": "#A71930",
            "secondaryColor": "#E3D4AD"
        },
        {
            "id": 110,
            "name": "Orioles",
            primaryColor: "#DF4601",
            secondaryColor: "#000000"
        },
        {
            "id": 111,
            "name": "Red Sox",
            primaryColor: "#BD3039",
            secondaryColor: "#0C2340"
        },
        {
            "id": 112,
            "name": "Cubs",
            primaryColor: "#0E3386",
            secondaryColor: "#CC3433"
        },
        {
            "id": 113,
            "name": "Reds",
            primaryColor: "#C6011F",
            secondaryColor: "#000000"
        },
        {
            "id": 114,
            "name": "Guardians",
            primaryColor: "#E50022",
            secondaryColor: "#00385D"
        },
        {
            "id": 115,
            "name": "Rockies",
            primaryColor: "#333366",
            secondaryColor: "#C4CED4"
        },
        {
            "id": 116,
            "name": "Tigers",
            primaryColor: "#0C2340",
            secondaryColor: "#FA4616"
        },
        {
            "id": 117,
            "name": "Astros",
            primaryColor: "#002D62",
            secondaryColor: "#EB6E1F"
        },
        {
            "id": 118,
            "name": "Royals",
            primaryColor: "#004687",
            secondaryColor: "#BD9B60"
        },
        {
            "id": 119,
            "name": "Dodgers",
            primaryColor: "#005A9C",
            secondaryColor: "#EF3E42"
        },
        {
            "id": 120,
            "name": "Nationals",
            primaryColor: "#AB0003",
            secondaryColor: "#14225A"
        },
        {
            "id": 121,
            "name": "Mets",
            primaryColor: "#002D72",
            secondaryColor: "#FF5910"
        }
    ],
    HELP_MESSAGE: '`/starters` - examine the starting pitching matchup for the upcoming game.\n'
    +    '`/standings` - check the standings for your team\'s division.\n'
    +    '`/lineup` - view the lineup card for the current game.\n'
    +    '`/line_score` - view the line score for the current game.\n'
    +    '`/box_score` - view the box score for the current game, including hitting and pitching stats.\n'
    +    '`/scoring_plays` - get a curated list of scoring plays, with direct links to the play on the Gameday page.\n'
    +    '`/highlights` - get a link to key moments from the game.\n'
    +    '`/gameday_subscribe` - subscribe a given Discord channel to receive real-time updates from the "Gameday" feed! This command is restricted to certain roles. Messages include a description of the play, any change in score, and statcast metrics for balls in play.\n'
    +    '`/gameday_unsubscribe` - un-subscribe a given Discord channel from the above functionality.\n'
    +    '`/schedule` - view the upcoming schedule for the next week of games.\n'
    +    '`/batter` - view stats on the batter that is up right now. Only available when a game is live.\n'
    +    '`/pitcher` - view stats on the pitcher that is pitching right now. Only available when a game is live.\n'
    +    '`/weather` - view the weather for the current game.\n'
    +    '`/attendance` - view the attendance for the current game.\n'
}
