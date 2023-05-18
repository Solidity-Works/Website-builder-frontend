export default (editor, config) => {
    const pn = editor.Panels;
    const eConfig = editor.getConfig();

    const panelDevices = pn.addPanel({id: 'devices-c'});

    panelDevices.get('buttons').add([{
        id: "panel-title",
        command: "panel-title",
        className: 'fa fa-desktop',
        active: 1,
      }]);
}