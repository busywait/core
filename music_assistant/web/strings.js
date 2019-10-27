const messages = {
    
    
    en: {
        // generic strings
        musicassistant: "Music Assistant",
        home: "Home",
        artists: "Artists",
        albums: "Albums",
        tracks: "Tracks",
        playlists: "Playlists",
        radios: "Radio",
        search: "Search",
        settings: "Settings",
        queue: "Queue",
        type_to_search: "Type here to search...",
        add_library: "Add to library",
        remove_library: "Remove from library",
        add_playlist: "Add to playlist...",
        remove_playlist: "Remove from playlist",
        no_player: "No player selected",
        // settings strings
        conf: {
            enabled: "Enabled",
            base: "Generic settings",
            musicproviders: "Music providers",
            playerproviders: "Player providers",
            player_settings: "Player settings",
            homeassistant: "Home Assistant integration",
            web: "Webserver",
            http_streamer: "Built-in (sox based) streamer",
            qobuz: "Qobuz",
            spotify: "Spotify",
            tunein: "TuneIn",
            file: "Filesystem",
            chromecast: "Chromecast",
            squeezebox: "Squeezebox support",
            sonos: "Sonos",
            webplayer: "Web Player (Chrome browser only)",
            username: "Username",
            password: "Password",
            hostname: "Hostname (or IP)",
            port: "Port",
            hass_url: "URL to homeassistant (e.g. https://homeassistant:8123)",
            hass_token: "Long Lived Access Token",
            hass_publish: "Publish players to Home Assistant",
            hass_player_power: "Attach player power to homeassistant entity",
            hass_player_source: "Source on the homeassistant entity (optional)",
            hass_player_volume: "Attach player volume to homeassistant entity",
            web_ssl_cert: "Path to ssl certificate file",
            web_ssl_key: "Path to ssl keyfile",
            player_enabled: "Enable player",
            player_name: "Custom name for this player",
            player_group_with: "Group this player to another (parent)player",
            player_mute_power: "Use muting as power control",
            player_disable_vol: "Disable volume controls",
            player_group_vol: "Apply group volume to childs (for group players only)",
            player_group_pow: "Apply group power based on childs (for group players only)",
            player_power_play: "Issue play command on power on",
            file_prov_music_path: "Path to music files",
            file_prov_playlists_path: "Path to playlists (.m3u)",
            web_http_port: "HTTP port",
            web_https_port: "HTTPS port",
            cert_fqdn_host: "FQDN of hostname in certificate",
            enable_r128_volume_normalisation: "Enable R128 volume normalization",
            target_volume_lufs: "Target volume (R128 default is -23 LUFS)",
            fallback_gain_correct: "Fallback gain correction if R128 readings not (yet) available",
            enable_audio_cache: "Allow caching of audio to temp files",
            trim_silence: "Strip silence from beginning and end of audio (temp files only!)",
            http_streamer_sox_effects: "Custom sox effects to apply to audio (built-in streamer only!) See http://sox.sourceforge.net/sox.html#EFFECTS",
            max_sample_rate: "Maximum sample rate this player supports, higher will be downsampled",
            force_http_streamer: "Force use of built-in streamer, even if the player can handle the music provider directly",
            not_grouped: "Not grouped",
            conf_saved: "Configuration saved, restart app to make effective",
            audio_cache_folder: "Directory to use for cache files",
            audio_cache_max_size_gb: "Maximum size of the cache folder (GB)",
            gapless_enabled: "Enable gapless support",
            crossfade_duration: "Crossfade duration (in seconds, 0 to disable)"
        },
        // player strings
        players: "Players",
        play: "Play",
        play_on: "Play on:",
        play_now: "Play Now",
        play_next: "Play Next",
        add_queue: "Add to Queue",
        show_info: "Show info",
        state: {        
            playing: "playing",
            stopped: "stopped",
            paused: "paused",
            off: "off"
        }
    },

    nl: {
        // generic strings
        musicassistant: "Music Assistant",
        home: "Home",
        artists: "Artiesten",
        albums: "Albums",
        tracks: "Nummers",
        playlists: "Afspeellijsten",
        radios: "Radio",
        search: "Zoeken",
        settings: "Instellingen",
        queue: "Wachtrij",
        type_to_search: "Type hier om te zoeken...",
        add_library: "Voeg toe aan bibliotheek",
        remove_library: "Verwijder uit bibliotheek",
        add_playlist: "Aan playlist toevoegen...",
        remove_playlist: "Verwijder uit playlist",
        no_player: "Geen speler geselecteerd",
        // settings strings
        conf: {
            enabled: "Ingeschakeld",
            base: "Algemene instellingen",
            musicproviders: "Muziek providers",
            playerproviders: "Speler providers",
            player_settings: "Speler instellingen",
            homeassistant: "Home Assistant integratie",
            web: "Webserver",
            http_streamer: "Ingebouwde (sox gebaseerde) streamer",
            qobuz: "Qobuz",
            spotify: "Spotify",
            tunein: "TuneIn",
            file: "Bestandssysteem",
            chromecast: "Chromecast",
            squeezebox: "Squeezebox ondersteuning",
            sonos: "Sonos",
            webplayer: "Web Player (alleen Chrome browser)",
            username: "Gebruikersnaam",
            password: "Wachtwoord",
            hostname: "Hostnaam (of IP)",
            port: "Poort",
            hass_url: "URL naar homeassistant (b.v. https://homeassistant:8123)",
            hass_token: "Token met lange levensduur",
            hass_publish: "Publiceer spelers naar Home Assistant",
            hass_player_power: "Verbind speler aan/uit met homeassistant entity",
            hass_player_source: "Benodigde bron op de verbonden homeassistant entity (optioneel)",
            hass_player_volume: "Verbind volume van speler aan een homeassistant entity",
            web_ssl_cert: "Pad naar ssl certificaat bestand",
            web_ssl_key: "Pad naar ssl certificaat key bestand",
            player_enabled: "Speler inschakelen",
            player_name: "Aangepaste naam voor deze speler",
            player_group_with: "Groupeer deze speler met een andere (hoofd)speler",
            player_mute_power: "Gebruik mute als aan/uit",
            player_disable_vol: "Schakel volume bediening helemaal uit",
            player_group_vol: "Pas groep volume toe op onderliggende spelers (alleen groep spelers)",
            player_group_pow: "Pas groep aan/uit toe op onderliggende spelers (alleen groep spelers)",
            player_power_play: "Automatisch afspelen bij inschakelen",
            file_prov_music_path: "Pad naar muziek bestanden",
            file_prov_playlists_path: "Pad naar playlist bestanden (.m3u)",
            web_http_port: "HTTP poort",
            web_https_port: "HTTPS poort",
            cert_fqdn_host: "Hostname (FQDN van certificaat)",
            enable_r128_volume_normalisation: "Schakel R128 volume normalisatie in",
            target_volume_lufs: "Doelvolume (R128 standaard is -23 LUFS)",
            fallback_gain_correct: "Fallback gain correctie indien R128 meting (nog) niet beschikbaar is",
            enable_audio_cache: "Sta het cachen van audio toe naar temp map",
            trim_silence: "Strip stilte van begin en eind van audio (in temp bestanden)",
            http_streamer_sox_effects: "Eigen sox effects toepassen op audio (alleen voor ingebouwde streamer). Zie http://sox.sourceforge.net/sox.html#EFFECTS",
            max_sample_rate: "Maximale sample rate welke deze speler ondersteund, hoger wordt gedownsampled.",
            force_http_streamer: "Forceer het gebruik van de ingebouwde streamer, ook al heeft de speler directe ondersteuning voor de muziek provider",
            not_grouped: "Niet gegroepeerd",
            conf_saved: "Configuratie is opgeslagen, herstart om actief te maken",
            audio_cache_folder: "Map om te gebruiken voor cache bestanden",
            audio_cache_max_size_gb: "Maximale grootte van de cache map in GB.",
            gapless_enabled: "Schakel ondersteuning voor gapless in.",
            crossfade_duration: "Crossfade (in seconden, 0 om uit te schakelen)."
        },
        // player strings
        players: "Spelers",
        play: "Afspelen",
        play_on: "Afspelen op:",
        play_now: "Nu afspelen",
        play_next: "Speel als volgende af",
        add_queue: "Voeg toe aan wachtrij",
        show_info: "Bekijk informatie",
        state: {        
            playing: "afspelen",
            stopped: "gestopt",
            paused: "gepauzeerd",
            off: "uitgeschakeld"
        }
    }
}