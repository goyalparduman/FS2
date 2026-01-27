import { Button, TextField, Card, CardContent } from "@mui/material";

function ComponentName() {
  return (
    <Card sx={{ width: 300, margin: "20px auto", padding: 2 }}>
      <CardContent>
        <h2>Material UI Example</h2>

        <TextField label="Name" fullWidth margin="normal" />
        <TextField label="Password" type="password" fullWidth margin="normal" />

        <Button variant="contained" fullWidth sx={{ marginTop: 2 }}>
          Submit
        </Button>
      </CardContent>
    </Card>
  );
}

export default ComponentName;