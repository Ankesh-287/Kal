import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Box, Card, CardContent, Typography, Divider, CircularProgress, Avatar } from '@mui/material';
import { fetchUser } from '../redux/slices/userSlice';

function Profile() {
  const dispatch = useDispatch();
  const { currentUser, loading, isAuthenticated } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 10 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (!isAuthenticated || !currentUser) {
    return (
      <Box sx={{ textAlign: 'center', mt: 10 }}>
        <Typography variant="h6">You're not logged in.</Typography>
      </Box>
    );
  }

  const initial = currentUser.firstname ? currentUser.firstname.charAt(0).toUpperCase() : '?';

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', p: 5 }}>
      <Card sx={{ width: '100%', maxWidth: 480, p: 3 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
          <Avatar sx={{ width: 64, height: 64, fontSize: 28 }}>{initial}</Avatar>
          <Box>
            <Typography variant="h5" fontWeight="bold">
              {currentUser.firstname} {currentUser.lastname}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {currentUser.email}
            </Typography>
          </Box>
        </Box>

        <Divider sx={{ my: 2 }} />

        <CardContent sx={{ p: 0 }}>
          <ProfileRow label="First Name" value={currentUser.firstname} />
          <ProfileRow label="Last Name" value={currentUser.lastname} />
          <ProfileRow label="Email" value={currentUser.email} />
          <ProfileRow label="Phone" value={currentUser.phone} />
          <ProfileRow label="Account Type" value={currentUser.isAdmin ? 'Admin' : 'Customer'} />
          <ProfileRow label="Member Since" value={formatDate(currentUser.createdAt)} />
        </CardContent>
      </Card>
    </Box>
  );
}

function ProfileRow({ label, value }) {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', py: 1 }}>
      <Typography variant="body2" color="text.secondary">{label}</Typography>
      <Typography variant="body2" fontWeight="500">{value ?? '—'}</Typography>
    </Box>
  );
}

function formatDate(dateStr) {
  if (!dateStr) return '—';
  const d = new Date(dateStr);
  return d.toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' });
}

export default Profile