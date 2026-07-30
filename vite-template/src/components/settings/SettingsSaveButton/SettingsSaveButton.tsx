import { Button } from "../../shared/Button/Button";

interface SettingsSaveButtonProps {
  onSave: () => void;
}

//  Second domain example — shared Button is justified by use in ≥2 domains.
export const SettingsSaveButton = ({ onSave }: SettingsSaveButtonProps) => {
  return <Button label="Save settings" onClick={onSave} />;
};
