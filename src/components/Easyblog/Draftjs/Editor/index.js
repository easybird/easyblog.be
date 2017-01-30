import React, { PropTypes } from 'react';
import styles from './index.css';

let rte = { createEmptyValue: () => "" }, RichTextEditor = <div></div>;
if (window) {
    rte = require('react-rte');
    RichTextEditor = rte.default;
}

class Editor extends React.Component {
    //TODO https://quilljs.com/guides/comparison-with-other-rich-text-editors/
    //TODO implement my own draft js version in stead of relying on react-rte..

    constructor(props) {
        super(props);
    }

    render() {
        const { draft, onChange } = this.props;

        // The toolbarConfig object allows you to specify custom buttons, reorder buttons and to add custom css classes.
        // Supported inline styles: https://github.com/facebook/draft-js/blob/master/docs/Advanced-Topics-Inline-Styles.md
        // Supported block types: https://github.com/facebook/draft-js/blob/master/docs/Advanced-Topics-Custom-Block-Render.md#draft-default-block-render-map
        const toolbarConfig = {
            // Optionally specify the groups to display (displayed in the order listed).
            display: ['INLINE_STYLE_BUTTONS', 'BLOCK_TYPE_BUTTONS', 'LINK_BUTTONS', 'BLOCK_TYPE_DROPDOWN', 'HISTORY_BUTTONS'],
            INLINE_STYLE_BUTTONS: [
                { label: 'Bold', style: 'BOLD', className: 'custom-css-class' },
                { label: 'Italic', style: 'ITALIC' },
                { label: 'Underline', style: 'UNDERLINE' }
            ],
            BLOCK_TYPE_DROPDOWN: [
                { label: 'Normal', style: 'unstyled' },
                { label: 'Heading Large', style: 'header-one' },
                { label: 'Heading Medium', style: 'header-two' },
                { label: 'Heading Small', style: 'header-three' }
            ],
            BLOCK_TYPE_BUTTONS: [
                { label: 'UL', style: 'unordered-list-item' },
                { label: 'OL', style: 'ordered-list-item' }
            ]
        };

        return <RichTextEditor
            className={styles.richTextEditor}
            autoFocus={true}
            placeholder="Spread your words ..."
            value={draft || rte.createEmptyValue()}
            onChange={onChange}
            toolbarConfig={toolbarConfig}
        />
    }
}

Editor.propTypes = {
    onChange: PropTypes.func.isRequired,
    draft: PropTypes.object
};

export default Editor;