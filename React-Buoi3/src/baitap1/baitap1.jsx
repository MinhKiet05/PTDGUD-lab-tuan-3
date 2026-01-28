import { useState } from 'react'

export default function TapTai1() {
  const [user, setUser] = useState({
    name: '',
    email: '',
    age: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target

    setUser({
      ...user,      // spread operator
      [name]: value // update từng field
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(user)
  }

  return (
    <div style={{ padding: '20px' }}>
      <h2>Bài tập 1: Form thông tin người dùng</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Tên:</label><br />
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Email:</label><br />
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Tuổi:</label><br />
          <input
            type="number"
            name="age"
            value={user.age}
            onChange={handleChange}
          />
        </div>

        <button type="submit">Gửi</button>
      </form>

      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  )
}
