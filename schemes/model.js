const db = require("../data/db-config");

module.exports = {
  find,
  findById,
  findSteps,
  add,
  update,
  remove
};

function find() {
  return db("schemes");
}

function findById(id) {
  return db("schemes")
    .where({ id })
    .first();
}

function findSteps(id) {
  return db("steps as s")
    .select(
      "s.id as Step ID",
      "sc.scheme_name as Scheme's Name",
      "s.step_number as Step Number",
      "s.instructions as Instructions"
    )
    .join("schemes as sc", "sc.id", "s.scheme_id")
    .where("scheme_id", id);
}

function add(scheme) {
  return db("schemes")
    .insert(scheme)
    .then(([id]) => {
      return findById(id);
    });
}

function update(changes, id) {
  return db("schemes")
    .where({ id })
    .update(changes)
    .then(findById(id));
}

function remove(id) {
  return db("schemes")
    .where({ id })
    .del();
}
