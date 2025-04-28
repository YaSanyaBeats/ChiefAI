'use client'
import * as React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import Divider from '@mui/material/Divider'
import FormControl from '@mui/material/FormControl'
import Link from '@mui/material/Link'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import MuiCard from '@mui/material/Card'
import { styled } from '@mui/material/styles'
import ForgotPassword from '../../components/ForgotPassword'
import { GoogleIcon } from '../../components/CustomIcons'

import { handleSignIn } from '../../lib/auth'
import { Card, SignInContainer } from '../../components/styled/Card'

export default function SignIn(/*props: { disableCustomTheme?: boolean }*/) {
    const [emailError, setEmailError] = React.useState(false)
    const [emailErrorMessage, setEmailErrorMessage] = React.useState('')
    const [passwordError, setPasswordError] = React.useState(false)
    const [passwordErrorMessage, setPasswordErrorMessage] = React.useState('')
    const [open, setOpen] = React.useState(false)

    const handleClickOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        if (emailError || passwordError) {
            event.preventDefault()
            return
        }
        const data = new FormData(event.currentTarget)
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        })
    }

    const validateInputs = () => {
        const email = document.getElementById('email') as HTMLInputElement
        const password = document.getElementById('password') as HTMLInputElement

        let isValid = true

        if (!email.value || !/\S+@\S+\.\S+/.test(email.value)) {
            setEmailError(true)
            setEmailErrorMessage('Please enter a valid email address.')
            isValid = false
        } else {
            setEmailError(false)
            setEmailErrorMessage('')
        }

        if (!password.value || password.value.length < 6) {
            setPasswordError(true)
            setPasswordErrorMessage('Password must be at least 6 characters long.')
            isValid = false
        } else {
            setPasswordError(false)
            setPasswordErrorMessage('')
        }

        return isValid
    }

    return (
        <SignInContainer direction="column" justifyContent="space-between">
            <Card variant="outlined">
                <Typography
                    component="h1"
                    variant="h4"
                    sx={{ width: '100%', fontSize: 'clamp(2rem, 10vw, 2.15rem)' }}
                >
                    Sign in
                </Typography>
                <Box
                    component="form"
                    onSubmit={handleSubmit}
                    noValidate
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: '100%',
                        gap: 2,
                    }}
                >
                    <FormControl>
                        <TextField
                            error={emailError}
                            helperText={emailErrorMessage}
                            id="email"
                            type="email"
                            name="email"
                            label="Email"
                            placeholder="your@email.com"
                            autoComplete="email"
                            autoFocus
                            required
                            fullWidth
                            variant="outlined"
                            color={emailError ? 'error' : 'primary'}
                        />
                    </FormControl>
                    <FormControl>
                        <TextField
                            error={passwordError}
                            helperText={passwordErrorMessage}
                            name="password"
                            placeholder="••••••"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            autoFocus
                            required
                            fullWidth
                            variant="outlined"
                            color={passwordError ? 'error' : 'primary'}
                        />
                    </FormControl>
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                    />
                    <ForgotPassword open={open} handleClose={handleClose} />
                    <Button type="submit" fullWidth variant="contained" onClick={validateInputs}>
                        Sign in
                    </Button>
                    <Link
                        component="button"
                        type="button"
                        onClick={handleClickOpen}
                        variant="body2"
                        sx={{ alignSelf: 'center' }}
                    >
                        Forgot your password?
                    </Link>
                </Box>
                <Divider>or</Divider>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <Button
                        fullWidth
                        variant="outlined"
                        onClick={handleSignIn}
                        startIcon={<GoogleIcon />}
                    >
                        Sign in with Google
                    </Button>
                    <Typography sx={{ textAlign: 'center' }}>
                        Don&apos;t have an account?{' '}
                        <Link
                            href="/material-ui/getting-started/templates/sign-in/"
                            variant="body2"
                            sx={{ alignSelf: 'center' }}
                        >
                            Sign up
                        </Link>
                    </Typography>
                </Box>
            </Card>
        </SignInContainer>
    )
}

// "use client"

// export default function HomePage() {
//   const { data: session } = useSession();

//   return (
//     <main className="flex items-center justify-center min-h-screen bg-gray-100">
//       {session ? (
//         <div>
//           <h2 className="text-lg font-medium text-gray-700">
//             Welcome, {session.user.name}!
//           </h2>
//           <button
//             onClick={handleSignOut}
//             className="px-4 py-2 mt-4 text-white bg-red-500 rounded-lg hover:bg-red-600"
//           >
//             Sign Out
//           </button>
//         </div>
//       ) : (
//         <button
//           onClick={handleSignIn}
//           className="px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
//         >
//           Sign in with Google
//         </button>
//       )}
//     </main>
//   );
// }
