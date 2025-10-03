import type { Schema, Struct } from '@strapi/strapi';

export interface MetaGeneral extends Struct.ComponentSchema {
  collectionName: 'components_meta_generals';
  info: {
    displayName: 'general';
  };
  attributes: {
    description: Schema.Attribute.Text;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface MetaLayout extends Struct.ComponentSchema {
  collectionName: 'components_meta_layouts';
  info: {
    displayName: 'layout';
  };
  attributes: {
    background: Schema.Attribute.Enumeration<
      ['default', 'light', 'dark', 'primary', 'secondary']
    >;
    frame: Schema.Attribute.Enumeration<['frame', 'no_frame']>;
    space_after: Schema.Attribute.Enumeration<
      ['default', 'extra small', 'small', 'middle', 'large', 'extra large']
    >;
    space_before: Schema.Attribute.Enumeration<
      ['default', 'extra small', 'small', 'middle', 'large', 'extra large']
    >;
  };
}

export interface MetaSeo extends Struct.ComponentSchema {
  collectionName: 'components_meta_seos';
  info: {
    displayName: 'SEO';
  };
  attributes: {
    seo_description: Schema.Attribute.Text;
    seo_title: Schema.Attribute.String;
  };
}

export interface TextHeaderImage extends Struct.ComponentSchema {
  collectionName: 'components_text_header_images';
  info: {
    displayName: 'header_image';
  };
  attributes: {
    general: Schema.Attribute.Component<'meta.general', false>;
    image: Schema.Attribute.Media<'files' | 'images'>;
    layout: Schema.Attribute.Component<'meta.layout', false>;
  };
}

export interface TextText extends Struct.ComponentSchema {
  collectionName: 'components_text_texts';
  info: {
    displayName: 'Text';
  };
  attributes: {
    general: Schema.Attribute.Component<'meta.general', false>;
    layout: Schema.Attribute.Component<'meta.layout', false>;
  };
}

export interface TextTextAndImage extends Struct.ComponentSchema {
  collectionName: 'components_text_text_and_images';
  info: {
    displayName: 'text_and_image';
  };
  attributes: {
    align: Schema.Attribute.Enumeration<['left', 'right']> &
      Schema.Attribute.DefaultTo<'left'>;
    general: Schema.Attribute.Component<'meta.general', false>;
    images: Schema.Attribute.Media<'images' | 'files', true>;
    layout: Schema.Attribute.Component<'meta.layout', false>;
  };
}

export interface TextTextAndVideo extends Struct.ComponentSchema {
  collectionName: 'components_text_text_and_videos';
  info: {
    displayName: 'text_and_video';
  };
  attributes: {
    general: Schema.Attribute.Component<'meta.general', false>;
    layout: Schema.Attribute.Component<'meta.layout', false>;
    video: Schema.Attribute.Media<'files' | 'videos', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'meta.general': MetaGeneral;
      'meta.layout': MetaLayout;
      'meta.seo': MetaSeo;
      'text.header-image': TextHeaderImage;
      'text.text': TextText;
      'text.text-and-image': TextTextAndImage;
      'text.text-and-video': TextTextAndVideo;
    }
  }
}
