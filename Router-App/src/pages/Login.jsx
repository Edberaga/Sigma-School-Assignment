import { useContext, useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Login = () => {
  const [useremail, setUseremail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const auth = useContext(AuthContext);

  const handleLogin = () => {
    const isCorrectUseremail = useremail === "edbertjonnathan@gmail.com";
    const isCorrectPassword = password === "123456";
    if(isCorrectUseremail && isCorrectPassword ) {
        auth.setToken("1234");
        console.log(auth);
        navigate("/dashboard");
    } else {
        alert("Invalid credentials!")
        setUseremail("")
        setPassword("")
    }
  }

  return (
    <section>
        <Form>
            <Form.Group className='mb-3'>
                <Form.Label htmlFor='emailControl'>Email Address</Form.Label>
                <Form.Control 
                    type='email'
                    id='emailControl'
                    value={useremail}
                    onChange={(e) => setUseremail(e.target.value)}
                />
                <Form.Text id='emailAddressHelper'>
                    We&apos;ll never share your email with anyone else.
                </Form.Text>
            </Form.Group>
            <Form.Group className='mb-3'>
                <Form.Label htmlFor='passwordControl'>Password</Form.Label>
                <Form.Control 
                    type='password'
                    id='passwordControl'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </Form.Group>
            <Button className='my-2' variant='primary' onClick={handleLogin}>Login</Button>
        </Form>
    </section>
  )
}

export default Login