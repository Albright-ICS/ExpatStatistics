import { ClaimBuilder } from './components/ClaimBuilder';
import { ProfileExperience } from './components/ProfileExperience';

export default function ChooseYourContextPage() {
  return (
    <div className="space-y-10">
      <ProfileExperience />
      <ClaimBuilder />
    </div>
  );
}
