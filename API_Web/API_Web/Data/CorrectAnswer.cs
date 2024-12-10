using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace API_Web.Data
{
    public class CorrectAnswer
    {
        [Key]
        public int Id_CorrectAnswer { get; set; } // Khóa chính

        [Required, StringLength(200)]
        public string Content_Answer { get; set; } // Nội dung đáp án

        public bool? IsCorrect { get; set; } // Đánh dấu đáp án đúng/sai

        public int Id_Question { get; set; } // FK tới Question
        [ForeignKey("Id_Question")]
        public Question Question { get; set; } // Navigation property tới câu hỏi
    }
}
