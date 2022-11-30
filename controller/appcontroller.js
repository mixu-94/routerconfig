export function getAllUser(req, res) {
  res.status(200).send({ msg: "all user" });
}

export function getSingleUser(req, res) {
  const { id } = req.params;

  if (id === datenbankidabfrage) {
    res.status(200).send({ msg: "user" });
  } else {
    res.status(404).send({ msg: "ERROR!! User not found" });
  }

  res.status(200).send({ msg: `Send ${id}` });
}
