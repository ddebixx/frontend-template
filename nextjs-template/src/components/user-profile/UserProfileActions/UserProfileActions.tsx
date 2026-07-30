import { Button } from "../../shared/Button/Button";

interface UserProfileActionsProps {
  onEdit: () => void;
}

//  Domain example using shared Button (≥2 domains → components/shared).
export const UserProfileActions = ({ onEdit }: UserProfileActionsProps) => {
  return <Button label="Edit profile" onClick={onEdit} />;
};
