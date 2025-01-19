
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://svelte.dev/docs/kit/configuration#env) (if configured).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```bash
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const NIX_CC: string;
	export const buildInputs: string;
	export const DISPLAY: string;
	export const TMP: string;
	export const STRINGS: string;
	export const XDG_STATE_HOME: string;
	export const NIX_PATH: string;
	export const DBUS_SESSION_BUS_ADDRESS: string;
	export const GTK_A11Y: string;
	export const NIX_ENFORCE_NO_NATIVE: string;
	export const NIX_LD_LIBRARY_PATH: string;
	export const NIX_XDG_DESKTOP_PORTAL_DIR: string;
	export const PWD: string;
	export const ATUIN_HISTORY_ID: string;
	export const npm_config_user_agent: string;
	export const out: string;
	export const STARSHIP_SESSION_KEY: string;
	export const INFOPATH: string;
	export const HYPRLAND_INSTANCE_SIGNATURE: string;
	export const WEZTERM_EXECUTABLE: string;
	export const NIX_LDFLAGS: string;
	export const buildPhase: string;
	export const SSH_AUTH_SOCK: string;
	export const STARSHIP_SHELL: string;
	export const TERM: string;
	export const DIRENV_FILE: string;
	export const COLORTERM: string;
	export const TEMPDIR: string;
	export const UWSM_FINALIZE_VARNAMES: string;
	export const XDG_DATA_HOME: string;
	export const DOCKER_HOST: string;
	export const NIX_BINTOOLS: string;
	export const GTK_PATH: string;
	export const INIT_CWD: string;
	export const NIX_BUILD_TOP: string;
	export const DIRENV_DIR: string;
	export const NIXOS_OZONE_WL: string;
	export const SOURCE_DATE_EPOCH: string;
	export const VISUAL: string;
	export const XDG_SESSION_ID: string;
	export const LOGNAME: string;
	export const NIX_HOST: string;
	export const IN_NIX_SHELL: string;
	export const EDITOR: string;
	export const NIX_BINTOOLS_WRAPPER_TARGET_HOST_x86_64_unknown_linux_gnu: string;
	export const AS: string;
	export const XDG_SESSION_DESKTOP: string;
	export const CUPS_DATADIR: string;
	export const DIRENV_DIFF: string;
	export const TERMINFO_DIRS: string;
	export const phases: string;
	export const ATUIN_SESSION: string;
	export const NM: string;
	export const SHELL: string;
	export const XDG_CURRENT_DESKTOP: string;
	export const FZF_DEFAULT_COMMAND: string;
	export const UWSM_WAIT_VARNAMES: string;
	export const XCURSOR_SIZE: string;
	export const outputs: string;
	export const TMUX_PLUGIN_MANAGER_PATH: string;
	export const USER: string;
	export const TZDIR: string;
	export const WEZTERM_UNIX_SOCKET: string;
	export const XCURSOR_PATH: string;
	export const LANG: string;
	export const LD_LIBRARY_PATH: string;
	export const dontAddDisableDepTrack: string;
	export const NIX_STORE: string;
	export const MOZ_ENABLE_WAYLAND: string;
	export const RANLIB: string;
	export const NO_AT_BRIDGE: string;
	export const _JAVA_AWT_WM_NONREPARENTING: string;
	export const NIX_PROFILES: string;
	export const GDK_SCALE: string;
	export const GIO_EXTRA_MODULES: string;
	export const OBJCOPY: string;
	export const LOCALE_ARCHIVE_2_27: string;
	export const PYTHONNOUSERSITE: string;
	export const TEMP: string;
	export const TERM_PROGRAM: string;
	export const TERM_PROGRAM_VERSION: string;
	export const WEZTERM_CONFIG_FILE: string;
	export const HYPRLAND_CMD: string;
	export const READELF: string;
	export const __NIXOS_SET_ENVIRONMENT_DONE: string;
	export const MANAGERPID: string;
	export const stdenv: string;
	export const DIRENV_WATCHES: string;
	export const MEMORY_PRESSURE_WRITE: string;
	export const WEZTERM_CONFIG_DIR: string;
	export const XDG_VTNR: string;
	export const __ETC_PROFILE_DONE: string;
	export const name: string;
	export const builder: string;
	export const LD: string;
	export const NIX_USER_PROFILE_DIR: string;
	export const INVOCATION_ID: string;
	export const QTWEBKIT_PLUGIN_PATH: string;
	export const XDG_DATA_DIRS: string;
	export const SPEECHD_CMD: string;
	export const WEZTERM_PANE: string;
	export const _: string;
	export const NIX_CFLAGS_COMPILE: string;
	export const shell: string;
	export const XDG_CONFIG_HOME: string;
	export const TMUX_PANE: string;
	export const HOST_PATH: string;
	export const OLDPWD: string;
	export const PAGER: string;
	export const NIXPKGS_CONFIG: string;
	export const XDG_MENU_PREFIX: string;
	export const NIX_LD: string;
	export const WAYLAND_DISPLAY: string;
	export const XDG_BACKEND: string;
	export const LESSKEYIN_SYSTEM: string;
	export const XDG_CONFIG_DIRS: string;
	export const NIX_HARDENING_ENABLE: string;
	export const FZF_DEFAULT_OPTS: string;
	export const PATH: string;
	export const XDG_RUNTIME_DIR: string;
	export const WEZTERM_EXECUTABLE_DIR: string;
	export const SIZE: string;
	export const LOCALE_ARCHIVE: string;
	export const SHLVL: string;
	export const XDG_SESSION_TYPE: string;
	export const AR: string;
	export const NOTIFY_SOCKET: string;
	export const HOME: string;
	export const STRIP: string;
	export const TMPDIR: string;
	export const CXX: string;
	export const CONFIG_SHELL: string;
	export const JOURNAL_STREAM: string;
	export const OBJDUMP: string;
	export const NIX_BUILD_CORES: string;
	export const SYSTEMD_EXEC_PID: string;
	export const XDG_CACHE_HOME: string;
	export const preferLocalBuild: string;
	export const system: string;
	export const NODE_ENV: string;
	export const RUSTC_WRAPPER: string;
	export const MEMORY_PRESSURE_WATCH: string;
	export const NIX_CC_WRAPPER_TARGET_HOST_x86_64_unknown_linux_gnu: string;
	export const CC: string;
	export const LIBEXEC_PATH: string;
	export const TMUX: string;
}

/**
 * Similar to [`$env/static/private`](https://svelte.dev/docs/kit/$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {
	
}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/main/packages/adapter-node) (or running [`vite preview`](https://svelte.dev/docs/kit/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://svelte.dev/docs/kit/configuration#env) (if configured).
 * 
 * This module cannot be imported into client-side code.
 * 
 * Dynamic environment variables cannot be used during prerendering.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		NIX_CC: string;
		buildInputs: string;
		DISPLAY: string;
		TMP: string;
		STRINGS: string;
		XDG_STATE_HOME: string;
		NIX_PATH: string;
		DBUS_SESSION_BUS_ADDRESS: string;
		GTK_A11Y: string;
		NIX_ENFORCE_NO_NATIVE: string;
		NIX_LD_LIBRARY_PATH: string;
		NIX_XDG_DESKTOP_PORTAL_DIR: string;
		PWD: string;
		ATUIN_HISTORY_ID: string;
		npm_config_user_agent: string;
		out: string;
		STARSHIP_SESSION_KEY: string;
		INFOPATH: string;
		HYPRLAND_INSTANCE_SIGNATURE: string;
		WEZTERM_EXECUTABLE: string;
		NIX_LDFLAGS: string;
		buildPhase: string;
		SSH_AUTH_SOCK: string;
		STARSHIP_SHELL: string;
		TERM: string;
		DIRENV_FILE: string;
		COLORTERM: string;
		TEMPDIR: string;
		UWSM_FINALIZE_VARNAMES: string;
		XDG_DATA_HOME: string;
		DOCKER_HOST: string;
		NIX_BINTOOLS: string;
		GTK_PATH: string;
		INIT_CWD: string;
		NIX_BUILD_TOP: string;
		DIRENV_DIR: string;
		NIXOS_OZONE_WL: string;
		SOURCE_DATE_EPOCH: string;
		VISUAL: string;
		XDG_SESSION_ID: string;
		LOGNAME: string;
		NIX_HOST: string;
		IN_NIX_SHELL: string;
		EDITOR: string;
		NIX_BINTOOLS_WRAPPER_TARGET_HOST_x86_64_unknown_linux_gnu: string;
		AS: string;
		XDG_SESSION_DESKTOP: string;
		CUPS_DATADIR: string;
		DIRENV_DIFF: string;
		TERMINFO_DIRS: string;
		phases: string;
		ATUIN_SESSION: string;
		NM: string;
		SHELL: string;
		XDG_CURRENT_DESKTOP: string;
		FZF_DEFAULT_COMMAND: string;
		UWSM_WAIT_VARNAMES: string;
		XCURSOR_SIZE: string;
		outputs: string;
		TMUX_PLUGIN_MANAGER_PATH: string;
		USER: string;
		TZDIR: string;
		WEZTERM_UNIX_SOCKET: string;
		XCURSOR_PATH: string;
		LANG: string;
		LD_LIBRARY_PATH: string;
		dontAddDisableDepTrack: string;
		NIX_STORE: string;
		MOZ_ENABLE_WAYLAND: string;
		RANLIB: string;
		NO_AT_BRIDGE: string;
		_JAVA_AWT_WM_NONREPARENTING: string;
		NIX_PROFILES: string;
		GDK_SCALE: string;
		GIO_EXTRA_MODULES: string;
		OBJCOPY: string;
		LOCALE_ARCHIVE_2_27: string;
		PYTHONNOUSERSITE: string;
		TEMP: string;
		TERM_PROGRAM: string;
		TERM_PROGRAM_VERSION: string;
		WEZTERM_CONFIG_FILE: string;
		HYPRLAND_CMD: string;
		READELF: string;
		__NIXOS_SET_ENVIRONMENT_DONE: string;
		MANAGERPID: string;
		stdenv: string;
		DIRENV_WATCHES: string;
		MEMORY_PRESSURE_WRITE: string;
		WEZTERM_CONFIG_DIR: string;
		XDG_VTNR: string;
		__ETC_PROFILE_DONE: string;
		name: string;
		builder: string;
		LD: string;
		NIX_USER_PROFILE_DIR: string;
		INVOCATION_ID: string;
		QTWEBKIT_PLUGIN_PATH: string;
		XDG_DATA_DIRS: string;
		SPEECHD_CMD: string;
		WEZTERM_PANE: string;
		_: string;
		NIX_CFLAGS_COMPILE: string;
		shell: string;
		XDG_CONFIG_HOME: string;
		TMUX_PANE: string;
		HOST_PATH: string;
		OLDPWD: string;
		PAGER: string;
		NIXPKGS_CONFIG: string;
		XDG_MENU_PREFIX: string;
		NIX_LD: string;
		WAYLAND_DISPLAY: string;
		XDG_BACKEND: string;
		LESSKEYIN_SYSTEM: string;
		XDG_CONFIG_DIRS: string;
		NIX_HARDENING_ENABLE: string;
		FZF_DEFAULT_OPTS: string;
		PATH: string;
		XDG_RUNTIME_DIR: string;
		WEZTERM_EXECUTABLE_DIR: string;
		SIZE: string;
		LOCALE_ARCHIVE: string;
		SHLVL: string;
		XDG_SESSION_TYPE: string;
		AR: string;
		NOTIFY_SOCKET: string;
		HOME: string;
		STRIP: string;
		TMPDIR: string;
		CXX: string;
		CONFIG_SHELL: string;
		JOURNAL_STREAM: string;
		OBJDUMP: string;
		NIX_BUILD_CORES: string;
		SYSTEMD_EXEC_PID: string;
		XDG_CACHE_HOME: string;
		preferLocalBuild: string;
		system: string;
		NODE_ENV: string;
		RUSTC_WRAPPER: string;
		MEMORY_PRESSURE_WATCH: string;
		NIX_CC_WRAPPER_TARGET_HOST_x86_64_unknown_linux_gnu: string;
		CC: string;
		LIBEXEC_PATH: string;
		TMUX: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: `${string}`]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * Dynamic environment variables cannot be used during prerendering.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
