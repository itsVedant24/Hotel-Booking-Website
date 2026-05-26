import { Card, Switch, Button } from "antd";

const SettingsPage = () => {
  return (
    <Card title="Settings" style={{ maxWidth: 600, margin: "auto" }}>
      <div style={{ marginBottom: 16 }}>
        <strong>Dark Mode</strong>
        <Switch style={{ marginLeft: 10 }} />
      </div>

      <div style={{ marginBottom: 16 }}>
        <strong>Email Notifications</strong>
        <Switch style={{ marginLeft: 10 }} defaultChecked />
      </div>

      <Button danger>Delete Account</Button>
    </Card>
  );
};

export default SettingsPage;