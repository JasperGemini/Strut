define(['./ComponentButton', 'tantaman/web/widgets/ChartGalleryModal', 'css!styles/chart/gallery.css'],
        function (ComponentButton, ChartGalleryModal) {
            'use strict';

            /**
             * @class ImportingComponentButton
             * @augments ComponentButton
             */
            return ComponentButton.extend({
                /**
                 * Initialize ImportingComponentButton.
                 */
                initialize: function () {
                    ComponentButton.prototype.initialize.apply(this, arguments);

                    this._modal = ChartGalleryModal.get(this.options);
//				this._itemImported = this._itemImported.bind(this);

                },
                
                /**
                 * React on button click.
                 * @private
                 */
                _clicked: function () {  //when clicked on chart button. 
                    this._modal.show(this._itemImported);
                    this._modal._showGallery()
//                    this._showGallery(galleryModel);
                },
                /**
                 * Add importent component to the slide.
                 * @private
                 */
                _itemImported: function (src) { 
                    this.options.editorModel.addComponent({
                        src: src,
                        type: this.options.componentType
                    });
                },
                constructor: function ImportingComponentButton() {
                    ComponentButton.prototype.constructor.apply(this, arguments);
                }
            });
        })
        
        