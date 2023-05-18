export default (editor, config) => {
  const bm = editor.BlockManager;
  const toAdd = name => config.blocks.indexOf(name) >= 0;


  toAdd('link-block') && bm.add('link-block', {
    category: 'Content',
    label: 'Link Block',
    attributes: { class: 'fa fa-link' },
    content: {
      type:'link',
      editable: false,
      droppable: true,
      style:{
        display: 'inline-block',
        padding: '5px',
        'min-height': '50px',
        'min-width': '50px'
      }
    },
  });

  toAdd('quote') && bm.add('quote', {
    category: 'Content',
    label: 'Quote',
    attributes: { class: 'fa fa-quote-right' },
    content: `<blockquote class="quote">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ipsum dolor sit
      </blockquote>`
  });

  toAdd('text-basic') && bm.add('text-basic', {
    category: 'Content',
    label: 'Text section',
    attributes: { class: 'gjs-fonts gjs-f-h1p' },
    content: `<section class="bdg-sect">
      <h1 class="heading">Insert title here</h1>
      <p class="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
      </section>`
  });

  toAdd('text') && bm.add('text', {
    category: 'Content',
    label: 'Text',
    attributes: {class:'gjs-fonts gjs-f-text'},
    content: {
      type:'text',
      content:'Insert your text here',
      style: {padding: '10px' },
      activeOnRender: 1
    },
  });

  toAdd('link') && bm.add('link', {
    category: 'Content',
    label: 'Link',
    attributes: {class:'fa fa-link'},
    content: {
      type:'link',
      content:'Link',
      style: {color: '#d983a6'}
    },
  });

  toAdd('image') && bm.add('image', {
    category: 'Content',
    label: 'Image',
    attributes: {class:'gjs-fonts gjs-f-image'},
    content: {
      style: {color: 'black'},
      type:'image',
      activeOnRender: 1
    },
  });

  toAdd('video') && bm.add('video', {
    category: 'Content',
    label: 'Video',
    attributes: {class:'fa fa-youtube-play'},
    content: {
      type: 'video',
      src: 'img/video2.webm',
      style: {
        height: '350px',
        width: '615px',
      }
    },
  });

  toAdd('map') && bm.add('map', {
    category: 'Content',
    label: 'Map',
    attributes: {class:'fa fa-map-o'},
    content: {
      type: 'map',
      style: {height: '350px'}
    },
  });
}
