"use client";

import ProfileFormSection from "./setting/ProfileForm";
import PasswordFormSection from "./setting/PasswordForm";
import { useSettingsView } from "@/hooks/account/useSettingsView";

export default function SettingsView() {
  const {
    profileAlert, setProfileAlert,
    passwordAlert, setPasswordAlert,
    showPass, toggle,
    profile, password,
  } = useSettingsView();

  return (
    <div className="space-y-6">
      <div className="px-1">
        <h2 className="text-xl font-bold text-gray-800">Account Settings</h2>
        <p className="text-sm text-gray-500 mt-0.5">
          Update your profile information and change your password
        </p>
      </div>

      <ProfileFormSection
        register={profile.register}
        handleSubmit={profile.handleSubmit(
          () => setProfileAlert("success"),
          () => setProfileAlert("error"),
        )}
        errors={profile.formState.errors}
        alert={profileAlert}
      />

      <PasswordFormSection
        register={password.register}
        handleSubmit={password.handleSubmit(
          () => setPasswordAlert("success"),
          () => setPasswordAlert("error"),
        )}
        errors={password.formState.errors}
        alert={passwordAlert}
        showPass={showPass}
        toggle={toggle}
        onInputChange={() => setPasswordAlert(null)}
      />
    </div>
  );
}