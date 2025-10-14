import type { Schema, Struct } from '@strapi/strapi';

export interface CoatingsApplicationItem extends Struct.ComponentSchema {
  collectionName: 'components_coatings_application_items';
  info: {
    description: '\u041E\u0431\u043B\u0430\u0441\u0442\u044C \u043F\u0440\u0438\u043C\u0435\u043D\u0435\u043D\u0438\u044F';
    displayName: 'Application Item';
  };
  attributes: {
    description: Schema.Attribute.RichText;
    icon: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
  };
}

export interface CoatingsBenefitCard extends Struct.ComponentSchema {
  collectionName: 'components_coatings_benefit_cards';
  info: {
    description: '\u041A\u0430\u0440\u0442\u043E\u0447\u043A\u0430 \u043F\u0440\u0435\u0438\u043C\u0443\u0449\u0435\u0441\u0442\u0432\u0430';
    displayName: 'Benefit Card';
  };
  attributes: {
    description: Schema.Attribute.RichText;
    title: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
  };
}

export interface CoatingsCtaBlock extends Struct.ComponentSchema {
  collectionName: 'components_coatings_cta_blocks';
  info: {
    description: '\u0411\u043B\u043E\u043A \u043F\u0440\u0438\u0437\u044B\u0432\u0430 \u043A \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044E';
    displayName: 'CTA Block';
  };
  attributes: {
    buttonLink: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    buttonText: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    description: Schema.Attribute.RichText;
    title: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
  };
}

export interface FaqFaqItem extends Struct.ComponentSchema {
  collectionName: 'components_faq_faq_items';
  info: {
    description: '\u0412\u043E\u043F\u0440\u043E\u0441 \u0438 \u043E\u0442\u0432\u0435\u0442 \u0434\u043B\u044F FAQ';
    displayName: 'FAQ Item';
  };
  attributes: {
    answer: Schema.Attribute.RichText;
    question: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'coatings.application-item': CoatingsApplicationItem;
      'coatings.benefit-card': CoatingsBenefitCard;
      'coatings.cta-block': CoatingsCtaBlock;
      'faq.faq-item': FaqFaqItem;
    }
  }
}
