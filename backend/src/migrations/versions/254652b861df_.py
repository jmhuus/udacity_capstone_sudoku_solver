"""empty message

Revision ID: 254652b861df
Revises: 9d773c36ceb0
Create Date: 2020-05-02 13:35:00.801284

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '254652b861df'
down_revision = '9d773c36ceb0'
branch_labels = None
depends_on = None


def upgrade():
    # Convert columns to ARRAY(Integer)
    op.drop_column('SudokuBoard', 'board_json')
    op.drop_column('SudokuBoard', 'solved_board')
    op.add_column('SudokuBoard', sa.Column('board_json', sa.ARRAY(sa.Integer()), nullable=True))
    op.add_column('SudokuBoard', sa.Column('solved_board', sa.ARRAY(sa.Integer()), nullable=True))


def downgrade():
    # Revert columns to VARCHAR
    op.drop_column('SudokuBoard', 'board_json')
    op.drop_column('SudokuBoard', 'solved_board')
    op.add_column('SudokuBoard', sa.Column('board_json', sa.VARCHAR(), nullable=True))
    op.add_column('SudokuBoard', sa.Column('solved_board', sa.VARCHAR(), nullable=True))
