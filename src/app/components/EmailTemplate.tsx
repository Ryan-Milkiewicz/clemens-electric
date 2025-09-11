type Props = {
  fullName: string;
  email: string;
  phoneNumber: string;
  address: string;
  message?: string;
};

export const EmailTemplate = ({
  fullName,
  email,
  phoneNumber,
  address,
  message,
}: Props) => (
  <div>
    <h2>New Info Request</h2>
    <p>
      <strong>Name:</strong> {fullName}
    </p>
    <p>
      <strong>Email:</strong> {email}
    </p>
    <p>
      <strong>Phone:</strong> {phoneNumber}
    </p>
    <p>
      <strong>Address:</strong> {address}
    </p>
    <p>
      <strong>Message:</strong>
    </p>
    <p>{message}</p>
  </div>
);
