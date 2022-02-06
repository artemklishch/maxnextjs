import { buildGetPath, extractFeedBack } from "./feedback";

function handler(req, res) {
  const feedbackId = req.query.feedbackId;
  const filePath = buildGetPath()
  const data = extractFeedBack(filePath)
  const certainItem = data.find(item => item.id === feedbackId)
  res.status(200).json({selectedFeedback: certainItem})
}

export default handler;
