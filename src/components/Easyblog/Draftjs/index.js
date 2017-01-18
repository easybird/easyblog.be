import React from 'react';
import Editor from './Editor';
import Button from '../../Button';
import styles from './index.css';
import cx from 'classnames';

class Draftjs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            draft: undefined,
            metadata: this.createMetaData(),
            userFeedback: false
        };
        this.onChange = (draft) => this._onChange(draft);
        this.onSave = () => this._onSave();
        this.onPublish = () => this._onPublish();
        this.addUserFeedback = (userFeedback) => this._addUserFeedback(userFeedback);
    }

    createMetaData() {
        return {
            title: 'Draft',
            date: '2017-01-17'
        }
    }

    _onChange(draft) {
        this.setState({ draft });
    }

    _onSave() {
        this.setState({ markdownDraft: this.state.draft.toString('markdown') });
        this.addUserFeedback('Saved');
    }

    _onPublish() {
        this.addUserFeedback('Published');
        this.setState({ draft: undefined })
    }

    _addUserFeedback(userFeedback) {
        this.setState({ userFeedback });
        setTimeout(() => {
            this.setState({ userFeedback: false })
        }, 1000)
    }

    render() {
        return (
            <div className={styles.draftEditor}>
                <div className={ cx({
                    [styles.feedbackBox]: true,
                    [styles.show]: this.state.userFeedback
                })}>
                    {this.state.userFeedback}
                </div>

                <Editor
                    draft={this.state.draft}
                    onChange={this.onChange}
                />
                <hr/>
                <div className={styles.controlPanel}>
                    <Button
                        onClick={this.onSave}
                        secondary={true}
                    >
                        Save
                    </Button>
                    <Button
                        secondary={true}
                    >
                        Preview
                    </Button>
                    <Button
                        onClick={this.onPublish}
                        secondary={true}
                    >
                        Publish
                    </Button>
                </div>
            </div>
        )
    }
}

Draftjs.propTypes = {};
export default Draftjs;