import React from 'react';
import {Link} from 'react-router-dom';

const UserList = ({ users }) => {
    console.log(users)
    return (
        <div>
            {users.map(user => {
                return (
                    <div
                        className="card text-white bg-primary mb-2"
                        key={user.id}
                    >

                        <div className="card-body p-3">
                            {/* `(숫자 1 키 바로옆) Grave (그레이브)  */}
                            <Link to={`/users/${user.id}`}>{user.name}</Link>
                        </div>
                    </div>);
            })}
        </div>
    );
};

export default UserList;