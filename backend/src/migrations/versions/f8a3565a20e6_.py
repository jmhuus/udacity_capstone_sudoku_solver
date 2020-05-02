"""empty message

Revision ID: f8a3565a20e6
Revises: 254652b861df
Create Date: 2020-05-02 13:41:41.965556

"""
from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import postgresql

# revision identifiers, used by Alembic.
revision = 'f8a3565a20e6'
down_revision = '254652b861df'
branch_labels = None
depends_on = None


def upgrade():
    # Convert columns to nullable = False
    op.alter_column('SudokuBoard', 'board_json',
               existing_type=postgresql.ARRAY(sa.INTEGER()),
               nullable=False)
    op.alter_column('SudokuBoard', 'solved_board',
               existing_type=postgresql.ARRAY(sa.INTEGER()),
               nullable=False)


def downgrade():
    # Convert columns to nullable = True
    op.alter_column('SudokuBoard', 'solved_board',
               existing_type=postgresql.ARRAY(sa.INTEGER()),
               nullable=True)
    op.alter_column('SudokuBoard', 'board_json',
               existing_type=postgresql.ARRAY(sa.INTEGER()),
               nullable=True)
