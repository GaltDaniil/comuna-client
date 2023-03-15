import styles from './CastomerChatMessages.module.scss';

import React from 'react';

export const CastomerChatMessages = ({ _id, userChats }) => {
    const [chatData] = userChats.filter((el) => el._id === _id);

    return (
        <div>
            {/* {chatData.messages.map((el) => (
                <div>{el.content}</div>
            ))} */}
        </div>
    );
};
