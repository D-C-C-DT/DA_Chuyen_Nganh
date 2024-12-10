using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Identity;
using API_Web.Models;

namespace API_Web.Data
{
    public class UserTest
    {
        [Key]
        public int Id_UserTest { get; set; } // Khóa chính

        public string UserId { get; set; } // ID của học sinh làm bài
        [ForeignKey("UserId")]
        public ApplicationUser User { get; set; } // Navigation property tới IdentityUser

        public int Id_Test { get; set; } // FK tới Test
        [ForeignKey("Id_Test")]
        public Test Test { get; set; } // Navigation property tới bài kiểm tra

        public DateTime CompletedAt { get; set; } // Thời gian hoàn thành

        public int Score { get; set; } // Điểm bài kiểm tra

        public DateTime SubmittedAt { get; set; } = DateTime.UtcNow; // Thời gian nộp bài
    }
}
