import React from 'react';
import styles from './CastomerChat.module.scss';
import { CastomerChatLable } from './CastomerChatLable';
import { setIsOpenChat, sendMessege, fetchMyChats } from '../../redux/slices/ChatSlice';
import { useDispatch, useSelector } from 'react-redux';
import { CastomerChatMessages } from './CastomerChatMessages';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

export const CastomerChat = () => {
    const dispatch = useDispatch();

    const userData = useSelector((state) => state.auth.data);
    console.log(userData);
    const userChats = useSelector((state) => state.chats.data);
    const status = useSelector((state) => state.chats.status);
    console.log(userChats);

    const [textMessage, setTextMessage] = React.useState('');
    const [activeUser, setActiveUser] = React.useState({
        index: 0,
        _id: 0,
        sellerId: 0,
        fullName: '',
        avatarUrl: '',
    });

    React.useEffect(() => {
        const getMyChats = async () => {
            await dispatch(fetchMyChats({ chatId: userData.chats }));
        };
        getMyChats();
    }, []);

    const ChangeChatUser = (id) => {
        setActiveUser(id);
    };
    const send = () => {
        dispatch(sendMessege({ content: textMessage, userId: userData._id, date: new Date() }));
        setTextMessage('');
    };

    return (
        <div className={styles.container}>
            <div className={styles.leftBar}>
                <h3> Чат</h3>
                <div className={styles.users}>
                    <ul style={{ padding: '0px' }}>
                        {userChats.map((el, index) => (
                            <CastomerChatLable
                                {...el}
                                index={index}
                                userId={userData._id}
                                key={index}
                                ChangeChatUser={ChangeChatUser}
                                activeUser={activeUser}
                            />
                        ))}
                    </ul>
                </div>
            </div>
            <div className={styles.rightBar}>
                <div className={styles.chatHeader}>
                    <div className={styles.activeUser}>
                        <div style={{ display: 'flex' }}>
                            <img src={`/img/${activeUser.avatarUrl}`} alt="userAvatar" />
                            <div style={{ marginLeft: '10px' }}>
                                <p>{activeUser.fullName}</p>
                                {/* <span>
                                    {fishSeller[activeUser.index].status === true
                                        ? 'Online'
                                        : 'Offline'}
                                </span> */}
                            </div>
                        </div>
                        <FontAwesomeIcon
                            onClick={() => {
                                dispatch(setIsOpenChat());
                            }}
                            className={styles.btnClose}
                            icon={faXmark}
                        />
                    </div>
                </div>
                <div className={styles.chatPlace}>
                    <div className={styles.messages}>
                        {status === 'loaded' ? (
                            <CastomerChatMessages userChats={userChats} _id={activeUser._id} />
                        ) : null}
                    </div>
                    <div className={styles.inputField}>
                        <div style={{ display: 'flex', alignItems: 'flex-end' }}>
                            <input
                                onChange={(e) => {
                                    setTextMessage(e.target.value);
                                }}
                                type="text"
                                placeholder="Напишите сообщение..."
                                value={textMessage}
                            />
                            <button
                                onClick={() => {
                                    send();
                                }}
                            >
                                1
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
