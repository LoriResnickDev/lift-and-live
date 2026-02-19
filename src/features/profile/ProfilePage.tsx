import ProfileForm from "./ProfileForm";

export default function ProfilePage() {
  return (
    <div className="profilePageContainer">
      <div className="profileContent">
        <h2>Welcome to Lift &amp; Live</h2>
        <p>Tell us a little about you to build a safe, effective weekly plan.</p>
        <ProfileForm />
      </div>
    </div>
  );
}
