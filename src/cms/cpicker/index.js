import controlComponent from './Control';
import previewComponent from './Preview';

const Widget = (opts = {}) => ({
  name: 'colorpickers',
  controlComponent,
  previewComponent,
  ...opts,
});

export const NetlifyCmsWidgetColorpickers = { Widget, controlComponent, previewComponent };
export default NetlifyCmsWidgetColorpickers;