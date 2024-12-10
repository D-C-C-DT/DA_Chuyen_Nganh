using Microsoft.AspNetCore.Identity;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using API_Web.Data;

namespace API_Web.Models
{
    public class Test
    {
        [Key]
        public int Id_Test { get; set; } // Khóa chính

        [Required, StringLength(150)]
        public string Title_Test { get; set; } // Tên bài kiểm tra

        public string Description { get; set; } // Mô tả bài kiểm tra

        public bool IsEssay { get; set; } // Loại bài kiểm tra (True: Tự luận, False: Trắc nghiệm)

        public DateTime CreatedAt { get; set; } = DateTime.UtcNow; // Thời gian tạo
        [ForeignKey("Id_Lesson")]
        public int Id_Lesson { get; set; }
        public Bai_Hoc Bai_Hocs { get; set; }

        public ICollection<Question> Questions { get; set; } // Danh sách câu hỏi

    }
}
