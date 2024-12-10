using API_Web.Models;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace API_Web.Data
{
    public class Question
    {
        [Key]
        public int Id_Question { get; set; } // Khóa chính

        [Required, StringLength(500)]
        public string Content_Question { get; set; } // Nội dung câu hỏi

        public bool IsEssay { get; set; } // Loại câu hỏi (True: Tự luận, False: Trắc nghiệm)

        public int Id_Test { get; set; } // FK tới Test
        [ForeignKey("Id_Test")]
        public Test Test { get; set; } // Navigation property tới bài kiểm tra

        public ICollection<CorrectAnswer> CorrectAnswers { get; set; } // Danh sách đáp án (nếu là trắc nghiệm)
    }
}
