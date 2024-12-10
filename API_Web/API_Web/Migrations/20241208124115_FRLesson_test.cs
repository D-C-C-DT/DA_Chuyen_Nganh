using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace API_Web.Migrations
{
    /// <inheritdoc />
    public partial class FRLesson_test : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Tests_Bai_Hocs_Bai_HocsId_Lesson",
                table: "Tests");

            migrationBuilder.DropIndex(
                name: "IX_Tests_Bai_HocsId_Lesson",
                table: "Tests");

            migrationBuilder.DropColumn(
                name: "Bai_HocsId_Lesson",
                table: "Tests");

            migrationBuilder.CreateIndex(
                name: "IX_Tests_Id_Lesson",
                table: "Tests",
                column: "Id_Lesson");

            migrationBuilder.AddForeignKey(
                name: "FK_Tests_Bai_Hocs_Id_Lesson",
                table: "Tests",
                column: "Id_Lesson",
                principalTable: "Bai_Hocs",
                principalColumn: "Id_Lesson",
                onDelete: ReferentialAction.Restrict);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Tests_Bai_Hocs_Id_Lesson",
                table: "Tests");

            migrationBuilder.DropIndex(
                name: "IX_Tests_Id_Lesson",
                table: "Tests");

            migrationBuilder.AddColumn<int>(
                name: "Bai_HocsId_Lesson",
                table: "Tests",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_Tests_Bai_HocsId_Lesson",
                table: "Tests",
                column: "Bai_HocsId_Lesson");

            migrationBuilder.AddForeignKey(
                name: "FK_Tests_Bai_Hocs_Bai_HocsId_Lesson",
                table: "Tests",
                column: "Bai_HocsId_Lesson",
                principalTable: "Bai_Hocs",
                principalColumn: "Id_Lesson",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
