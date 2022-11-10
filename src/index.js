{
    "sections": {
      "image_banner": {
        "type": "image-banner",
        "blocks": {
          "heading": {
            "type": "heading",
            "settings": {
              "heading": "Dream as High and Goal as Player",
              "heading_size": "h0"
            }
          },
          "text": {
            "type": "text",
            "settings": {
              "text": "",
              "text_style": "caption-with-letter-spacing"
            }
          },
          "button": {
            "type": "buttons",
            "settings": {
              "button_label_1": "Shop all",
              "button_link_1": "{{ shop.brand.favicon_url }}",
              "button_style_secondary_1": true,
              "button_label_2": "",
              "button_link_2": "",
              "button_style_secondary_2": false
            }
          }
        },
        "block_order": [
          "heading",
          "text",
          "button"
        ],
        "settings": {
          "image": "{{ shop.brand.cover_image }}",
          "image_2": "shopify:\/\/shop_images\/frustrated-man-on-computer.jpg",
          "image_overlay_opacity": 20,
          "image_height": "small",
          "adapt_height_first_image": true,
          "desktop_content_position": "middle-center",
          "show_text_box": false,
          "desktop_content_alignment": "center",
          "color_scheme": "background-1",
          "mobile_content_alignment": "left",
          "stack_images_on_mobile": true,
          "show_text_below": true
        }
      },
      "rich_text": {
        "type": "rich-text",
        "blocks": {
          "heading": {
            "type": "heading",
            "settings": {
              "heading": "",
              "heading_size": "h1"
            }
          }
        },
        "block_order": [
          "heading"
        ],
        "settings": {
          "desktop_content_position": "center",
          "content_alignment": "center",
          "color_scheme": "inverse",
          "full_width": true,
          "padding_top": 0,
          "padding_bottom": 88
        }
      },
      "featured_collection": {
        "type": "featured-collection",
        "settings": {
          "title": "Featured products",
          "heading_size": "h1",
          "description": "",
          "show_description": false,
          "description_style": "uppercase",
          "collection": "all",
          "products_to_show": 8,
          "columns_desktop": 4,
          "full_width": false,
          "show_view_all": true,
          "view_all_style": "solid",
          "enable_desktop_slider": false,
          "color_scheme": "background-1",
          "image_ratio": "adapt",
          "show_secondary_image": true,
          "show_vendor": false,
          "show_rating": false,
          "enable_quick_add": false,
          "columns_mobile": "2",
          "swipe_on_mobile": false,
          "padding_top": 28,
          "padding_bottom": 36
        }
      },
      "collage": {
        "type": "collage",
        "settings": {
          "heading": "Multimedia collage",
          "heading_size": "h2",
          "desktop_layout": "left",
          "mobile_layout": "collage",
          "card_styles": "product-card-wrapper",
          "color_scheme": "inverse",
          "padding_top": 20,
          "padding_bottom": 36
        }
      },
      "video": {
        "type": "video",
        "settings": {
          "heading": "",
          "heading_size": "h1",
          "video_url": "https:\/\/www.youtube.com\/watch?v=_9VUPq3SxOc",
          "description": "",
          "full_width": false,
          "color_scheme": "background-1",
          "padding_top": 36,
          "padding_bottom": 36
        }
      },
      "multicolumn": {
        "type": "multicolumn",
        "blocks": {
          "column1": {
            "type": "column",
            "settings": {
              "title": "Column",
              "text": "<p>Pair text with an image to focus on your chosen product, collection, or blog post. Add details on availability, style, or even provide a review.<\/p>",
              "link_label": "",
              "link": ""
            }
          },
          "column2": {
            "type": "column",
            "settings": {
              "title": "Column",
              "text": "<p>Pair text with an image to focus on your chosen product, collection, or blog post. Add details on availability, style, or even provide a review.<\/p>",
              "link_label": "",
              "link": ""
            }
          },
          "column3": {
            "type": "column",
            "settings": {
              "title": "Column",
              "text": "<p>Pair text with an image to focus on your chosen product, collection, or blog post. Add details on availability, style, or even provide a review.<\/p>",
              "link_label": "",
              "link": ""
            }
          }
        },
        "block_order": [
          "column1",
          "column2",
          "column3"
        ],
        "settings": {
          "title": "",
          "heading_size": "h1",
          "image_width": "third",
          "image_ratio": "adapt",
          "columns_desktop": 3,
          "column_alignment": "center",
          "background_style": "none",
          "button_label": "",
          "button_link": "",
          "color_scheme": "background-1",
          "columns_mobile": "1",
          "swipe_on_mobile": false,
          "padding_top": 36,
          "padding_bottom": 36
        }
      }
    },
    "order": [
      "image_banner",
      "rich_text",
      "featured_collection",
      "collage",
      "video",
      "multicolumn"
    ]
  }
  {
    "sections": {
      "main": {
        "type": "main-search",
        "settings": {
          "columns_desktop": 4,
          "image_ratio": "adapt",
          "show_secondary_image": false,
          "show_vendor": false,
          "show_rating": false,
          "enable_filtering": true,
          "filter_type": "horizontal",
          "enable_sorting": true,
          "article_show_date": true,
          "article_show_author": false,
          "columns_mobile": "2",
          "padding_top": 36,
          "padding_bottom": 36
        }
      }
    },
    "order": [
      "main"
    ]
  }