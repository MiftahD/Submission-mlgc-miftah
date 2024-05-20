const loadHistory = async () => {
  const db = new Firestore({
    keyFilename: process.env.GOOGLE_APPLICATION_CREDENTIALS,
    projectId: "submissionmlgc-muhammadmiftah",
    databaseId: "Predictions",
  });

  const predictCollect = db.collection("Predictions");

  const snapshot = await predictCollect.orderBy("createdAt", "desc").get();

  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    history: doc.data(),
  }));

  return { data };
};

module.exports = loadHistory;
