import React from 'react'

const login = () => {
    return (
        <div>
          <h1>تسجيل الدخول</h1>
          <input type="email" placeholder="البريد الإلكتروني" />
          <input type="password" placeholder="كلمة السر" />
          <button>تسجيل الدخول</button>
        </div>
      );
}

export default login