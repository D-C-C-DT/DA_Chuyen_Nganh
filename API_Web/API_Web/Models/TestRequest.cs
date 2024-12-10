namespace API_Web.Models
{
    public class TestRequest
    {
        public string Title_Test { get; set; }
        public string Description { get; set; }
        public bool IsEssay { get; set; }
        public int Id_Lesson { get; set; }
        public List<QuestionRequest> Questions { get; set; }
    }

    public class QuestionRequest
    {
        public string Content_Question { get; set; }
        public bool IsEssay { get; set; }
        public List<CorrectAnswerRequest> CorrectAnswers { get; set; }
    }

    public class CorrectAnswerRequest
    {
        public string Content_Answer { get; set; }
        public bool? IsCorrect { get; set; }
    }

}
