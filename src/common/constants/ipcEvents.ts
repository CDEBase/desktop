const enum IPC_EVENTS {
  // MAIN
  SHOW_MAIN = 'SHOW_MAIN',
  // ABOUT
  SHOW_ABOUT = 'SHOW_ABOUT',

  // Tray
  HIDE_TRAY = 'HIDE_TRAY',
  SHOW_TRAY = 'SHOW_TRAY',
  SHOW_TRAY_WINDOWED = 'SHOW_TRAY_WINDOWED',
  TRAY_OPEN_ITEM = 'TRAY_OPEN_ITEM',
  TRAY_TOGGLE_AWLAYS_ON_TOP = 'TRAY_TOGGLE_AWLAYS_ON_TOP',
  TRAY_WINDOWED_MODE_CHANGED = 'TRAY_WINDOWED_MODE_CHANGED',
  TRAY_WINDOWED_ALWAYS_ON_TOP_CHANGED = 'TRAY_WINDOWED_ALWAYS_ON_TOP_CHANGED',
  TOGGLE_TRAY_WITH_BOUNDS = 'TOGGLE_TRAY_WITH_BOUNDS',
  TRAY_ICON_CREATED = 'TRAY_ICON_CREATED',
  TRAY_ICON_DESTROYED = 'TRAY_ICON_DESTROYED',
}

export { IPC_EVENTS };
