import ProfileForm from "./profile-form";
import classes from "./user-profile.module.css";
import { useSession, getSession } from "next-auth/react";
import {useState} from 'react'

function UserProfile() {
  const [isLoading, setIsLoading] = useState()
  const { data } = useSession();
  console.log('data', data)

  return (
    <section className={classes.profile}>
      <h1>Your User Profile</h1>
      <ProfileForm />
    </section>
  );
}

export default UserProfile;
