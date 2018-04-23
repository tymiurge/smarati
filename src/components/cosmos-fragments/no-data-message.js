import React from 'react'
import PropTypes from 'prop-types'
import { Message, Icon } from 'semantic-ui-react'

const NoDataMessage = () => 
    <Message
            header={'No data yet'}
            content={
                <div>
                    <p></p>
                    <p>Must be cause you're first time here. Just click <Icon name='plus' size='tiny' /> and follow your gut.</p>
                    
                    <p>
                        In case if we're not informative enough here are some tips:
                        <ul>
                            <li>You can add either card box, or single card, or list of cards by clicking the + icon - anywhere, anytime.</li>
                            <li>In case if you add list of cards - they'll apear in the Uncompleted cards so that you can add proper piece of info for every card individually.</li>
                            <li>In the learn tab you'll be proposed either start learning all unlearnt cards, either some group of cards</li>
                            <li>Group of cards - it is either Card box content or cards having some specific tag (or tagS)</li>
                            <li>Card is defined to be learnt if it gathers 7 stars</li>
                        </ul>
                    </p>
                    <p>
                        Bone voyage!
                    </p>
                </div>
            }
        />

export default NoDataMessage
